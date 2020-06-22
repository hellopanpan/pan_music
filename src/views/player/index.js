import React, { useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import { getSongUrl } from '@/utils'

import { Slider } from 'antd';
// 图标
import {
  PlayCircleFilled,
  PauseCircleFilled
} from '@ant-design/icons';
import { getPlaylistDetail } from '@/api'
import { 
  PlayListItem
} from './style';

function Player (props){
  let { play, volume, src } = props;
  let { setpause, setplay, setVolume } = props;

  console.log(props)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = getSongUrl(1400256289)
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
    play ? <div onClick={() => {setplay(false)}}><PauseCircleFilled /></div> : <div onClick={() => {setplay(true)}}><PlayCircleFilled /></div>
  )
  // 时间播放新位置
  let updateTime = () => {
    setDuration(audioRef.current.duration)
    setCurrentTime(audioRef.current.currentTime)
  }
  let setDurationsit = (value) => {
    audioRef.current.currentTime = value / 100 * duration
  }
  return (
    <CSSTransition timeout={1000}>
      <div>
        <audio 
          controls="controls"
          onTimeUpdate={updateTime}
          ref={audioRef}
        ></audio>
        {volume}
        <Slider defaultValue={volume} onChange={(value)=> {setVolume.call(this,value)}}/> 
        <Slider  value={currentTime / duration * 100} onChange={(value)=> {setDurationsit.call(this, value)}}/> 
        {duration} ---
        {currentTime}
        {icon}
        {src}
      </div>
    </CSSTransition>
  ); 
};
const mapStateToProps = (state) => {
  return {
    play: state.getIn(['player', 'play']),
    volume: state.getIn(['player', 'volume']),
    src: state.getIn(['player', 'src']),
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);