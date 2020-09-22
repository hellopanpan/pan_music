import React, { useState, useEffect, memo, useRef} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'

import { Slider } from 'antd';
// 图标
import {
  PlayCircleFilled,
  PauseCircleFilled,
  AlignRightOutlined,
  DeleteFilled,
  DownOutlined,
} from '@ant-design/icons';
import { 
  AudioWrap,
  IPlayer,
  Nplayer,
  PlayListI
} from './style';
import Lrc from './lrc'
const Player = memo((props) => {
  let { play, volume, src, player2, playList, showMini } = props;
  let { setplay, setCurrenttimestate, openMusic, toggleMini } = props;

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [showListflag, setShowListflag] = useState(false)
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.autoplay = true
    audioRef.current.loop = true 
  }, []);
  
  // 播放暂停？
  useEffect(() => {
    if (play) audioRef.current.play();
    if (!play) audioRef.current.pause();
  }, [play]);
  useEffect(() => {
    if (src) audioRef.current.src = src;
  }, [src]);
  // 声音
  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume]);
  let icon = (
    play ? <div className="ico" onClick={setplay}><PauseCircleFilled /></div> 
      : <div  className="ico" onClick={setplay}><PlayCircleFilled /></div>
  )
  // 时间播放新位置
  let updateTime = () => {
    setDuration(audioRef.current.duration)
    setCurrentTime(audioRef.current.currentTime)
    setCurrenttimestate(audioRef.current.currentTime)
  }
  let setDurationsit = (value) => {
    audioRef.current.currentTime = value / 100 * duration
  }
  // 获取时分
  const getSecondMin = (sec) => {
    let min = parseInt(sec) / 60 > 0 ? parseInt(parseInt(sec) / 60) : '0'
    let sec2= parseInt(parseInt(sec) % 60)
    return `${min >= 10 ? min : '0' + min}: ${sec2 >= 10 ? sec2 : '0' + sec2}`
  }
  // 放歌
  const goSong =  (e, item) => {
    e.stopPropagation();
    openMusic(item)
  }
  // 播放列表
  let list = (
    <PlayListI onClick={(e) => {goList(e, false)}}>
      <div className="wrap">
      {
        playList.map(((item, index) => {
          return (
            <div className="itemL" key={index} onClick={(e) => {goSong(e, item)}}>
              <div className="playcon">
                {player2.id === item.id ? <PlayCircleFilled /> : null}
              </div>
              <div className="name2">{item.title}</div>
              <div className="icos">
                <DeleteFilled />
              </div>
            </div>
          )
        }))
      }
      </div>
    </PlayListI>
  )
  const goList = (e, flag) => {
    e.stopPropagation();
    setShowListflag(flag)
  }
  // mini palyer
  let mini = (
    <IPlayer>
      <img src={player2.pic} className="pic" alt="" onClick={toggleMini} />
      <div className="title-wrap">
        <div className="name">{player2.title}</div>
        <div className="singer">{player2.singer}</div>
      </div>
       {icon}
    </IPlayer>
  )
  //  大号音乐播放
  let normal = (
    <Nplayer >
      <div className="top">
        <DownOutlined onClick={toggleMini}/>
        <div className="right">
          <div className="title">{player2.title}</div>
          <div className="singer">{player2.singer}</div>
        </div>
      </div>
      <div className="wraper">
        <div className="lrc-cont"><Lrc></Lrc></div>
        <div className="progress">
          <div className="cur">{getSecondMin(currentTime)}</div>
          <div className="pro-bar"><Slider  value={currentTime / duration * 100} onChange={(value)=> {setDurationsit.call(this, value)}}/> </div>
          <div className="total">{getSecondMin(duration)}</div>
        </div>
        <div className="button">
          {icon}
          <AlignRightOutlined onClick={(e) => {goList(e, true)}}/>
        </div>
      </div>
      
    </Nplayer>
  )
  
  return (
    <AudioWrap>
      <audio 
        className="audio"
        controls="controls"
        onTimeUpdate={updateTime}
        ref={audioRef}
      ></audio>
      <CSSTransition timeout={1000}>
        {showMini? mini: normal}
      </CSSTransition>
      {showListflag ? list : null}
    </AudioWrap>
    
  ); 
});
const mapStateToProps = (state) => {
  return {
    play: state.getIn(['player', 'play']),
    volume: state.getIn(['player', 'volume']),
    src: state.getIn(['player', 'src']),
    current: state.getIn(['player', 'current']),
    player2: state.getIn(['player', 'playerinfo']),
    playList: state.getIn(['player', 'playList']),
    showMini: state.getIn(['player', 'showMini']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setplay(flag) {
      const action = actionsCreators.setPlay(flag)
      dispatch(action)
    },
    setVolume(num) {
      const action = actionsCreators.setVolume(num)
      dispatch(action)
    },
    setCurrenttimestate(time) {
      const action = actionsCreators.setCurrenttime(time)
      dispatch(action)
    },
    openMusic(item) {
      const action = actionsCreators.getSrc(item.id)
      const action2 = actionsCreators.setCurrentPlayer(item)
      dispatch(action)
      dispatch(action2)
    },
    toggleMini() {
      const action = actionsCreators.toggleMini()
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);