import React, {useState, useRef, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import * as api from '@/api'
import GoBack from '@/common/goBack/index'
import { CSSTransition } from "react-transition-group";


// 图标
import {
  PlusOutlined, 
  PlayCircleOutlined
} from '@ant-design/icons';
// 样式
import { 
  Wraper
} from './style';

import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'

function SingerDetail (props){
  const {openMusic, playAllMusicList, history, setXY} = props
  const {openPlayer, showMini, playerinfo} = props

  const [hotSongs, setHotSongs]= useState([])
  const [artist, setArtist]= useState({})
  const [showStatus, setShowStatus]= useState(true)

  const usescollRef = useRef()
  const wrapRef = useRef()
  const picRef = useRef()
  const imgRef = useRef()


  useEffect(() => {
    let params = {
      id: (props.match.params.id) || 5781
    }
    api.getArtistsListDetail(params).then(res => {
      setHotSongs(res.hotSongs || [])
      setArtist(res.artist || {})
      setShowStatus(true)
    });
  }, [history]);

  //播放全部
  const playAllMusic = (list) => {
    if (list.legnth === 0) return
    openMusic(list[0])
    playAllMusicList(list)
  } 

  //播放
  const openMusicWrap = (e, item) => {
    if (item.id == playerinfo.id) return
    openMusic(item)
    setXY(e.nativeEvent.clientX, e.nativeEvent.clientY)
  } 

  // 滚动
  useEffect(() => {
    if (!wrapRef.current) return
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: true,
      bounce: true,
      mouseWheel: true,
      probeType: 3,
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      },
    });
    usescollRef.current.on('scroll', (pos) => {
      if (pos.y < -300) return
      wrapRef.current.style.top = 330 + pos.y + 'px'
      // 图片变化
      console.log(pos.y)
      if (pos.y > 0) {
        picRef.current.style.height = 300 + pos.y + "px"
        let ratio = (300 + pos.y)/300
        imgRef.current.style.transform = `scale(${ratio})`
      }
      console.log(picRef.current.style.height)
    })
    
  }, [showStatus]);

  // Backfn
  const Backfn = () => {
    setShowStatus(false)
  }

  return (
    <CSSTransition 
      in={showStatus}
      timeout={300}
      unmountOnExit
      classNames="singer"
      appear={true}
      onExited={() => props.history.goBack()}
    >
      <Wraper>
        <GoBack Backfn={Backfn}></GoBack>
        <div className="top-banner" ref={picRef} >
          { artist.picUrl? <img ref={imgRef} src={artist.picUrl + '?param=400x400' } alt=""/> : null }
          <div className="btn"><PlusOutlined/> 收藏</div>
        </div>
        <div className={`scoll-wrap ${openPlayer? 'open-player': ''}`} ref={wrapRef} >
          <div>
            <div className="title" onClick={() => {playAllMusic(hotSongs)}}>
              <PlayCircleOutlined></PlayCircleOutlined>
              <span className="play-text">播放全部</span>
              <span className="all">(共37首)</span>
            </div>
            <div className="list">
              {
                hotSongs.map((item, index) => {
                  return(
                    <div className="list-item" key={index} onClick={(e) => {openMusicWrap(e, item)}}>
                      <div className="num">{index + 1}</div>
                      <div className="right">
                        <div className="name">{item.name}</div>
                        <div className="singer">{item.ar && item.ar[0].name} - {item.al && item.al.name}</div>
                      </div>
                    </div>
                  ) 
                })
              }
            </div>
          </div>
        </div>
      </Wraper>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {
    openPlayer: state.player.get('openPlayer'),
    playerinfo: state.player.get('playerinfo'),
    showMini: state.player.get( 'showMini'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playAllMusicList(songList) {
      let list = songList.map(item => {
        return {
          title: item.name,
          singer: item.ar && item.ar[0].name,
          alname: item.al && item.al.name,
          pic: item.al && item.al.picUrl,
          id: item.id
        }
      })
      const action3 = actionsCreatorsPlayer.setPlaylist(list)
      dispatch(action3)
    },
    setXY(x, y) {
      const action = actionsCreatorsPlayer.setXY({x, y})
      dispatch(action)
    },
    openMusic(item) {
      let info = {
        title: item.name,
        singer: item.ar && item.ar[0].name,
        alname: item.al && item.al.name,
        pic: item.al && item.al.picUrl,
        id: item.id
      }
      const action = actionsCreatorsPlayer.getSrc(item.id)
      const action2 = actionsCreatorsPlayer.setCurrentPlayer(info)
      const action3 = actionsCreatorsPlayer.pushPlaylist(info)
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingerDetail);