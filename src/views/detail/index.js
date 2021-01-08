import React, { useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
// import { getSongUrl } from '@/utils'

// import { Carousel } from 'antd';
// 图标
import { getPlaylistDetail } from '@/api'

import { 
  Wraper,
  PlayList,
  DetailHeader,
  PlayListItem,
  NoPlayer
} from './style';

import GoBack from '@/common/goBack/index'
import Scroll from '@/common/scroll'
import MusicStart from '@/common/musicStart'

function Header (props){

  let { openMusic, openPlayer} = props
  let { showMini, playerinfo } = props
  const musicRef = useRef()
  const [songList, setSongList] = useState([]);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    let getstate = props.history.location.state || localStorage.getItem('state-id')
    if (!getstate) return
    localStorage.setItem('state-id', props.history.location.state)
    getPlaylistDetail({id: (getstate && getstate.id) || '5007828838'}).then(res => {
      setSongList((res.playlist && res.playlist.tracks) || []);
      setPlaylist(res.playlist);
    })
  },[props.history])


  const openMusicWrap = (e, item, songList) => {
    if (item.id == playerinfo.id) return
    console.log(e)
    openMusic(item, songList)
    musicRef.current.getPositon(e.nativeEvent.clientX, e.nativeEvent.clientY, showMini)
  };

  return (
    <CSSTransition timeout={1000}>
      <Wraper>
        <GoBack></GoBack>
        <DetailHeader>
          <div className="img-wrap">
             <img src={playlist.coverImgUrl && playlist.coverImgUrl + '?param=200x200'} alt=""/>
          </div>
          <div className="right">
            <div className="title">{playlist.name}</div>
            <div className="author">
              <img src={playlist.creator && playlist.creator.avatarUrl + '?param=100x100' } alt=""/>
              <span className="auth">{playlist.creator && playlist.creator.nickname}</span>
            </div>
          </div>
        </DetailHeader>
        <PlayList>
            <Scroll>
              <div>
                {
                  songList.map( (item, index) => {
                    return (
                      <PlayListItem key={index} onClick={(e)=> {openMusicWrap(e, item, songList)}}>
                        <div className="num">{index + 1}</div>
                        <div className="right">
                          <div className="title">{item.name}</div>
                          <div className="discribe">{item.ar && item.ar[0].name} {item.al && item.al.name}</div>
                        </div>
                      </PlayListItem>
                    )
                  })
                }
              </div>
            </Scroll>
        </PlayList>
        {openPlayer ? <NoPlayer></NoPlayer> : null }
        <MusicStart ref={musicRef}></MusicStart>
      </Wraper>
    </CSSTransition>
  ); 
};
const mapStateToProps = (state) => {
  return {
    playerinfo: state.player.get('playerinfo'),
    showMini: state.player.get('showMini'),
    openPlayer: state.player.get('openPlayer'),
    focused: state.recomend.get('focused'),
    banner: state.recomend.get('banner'),
    personal: state.recomend.get('personal')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMusic(item, songList) {
      let info = {
        title: item.name,
        singer: item.ar && item.ar[0].name,
        alname: item.al && item.al.name,
        pic: item.al && item.al.picUrl,
        id: item.id
      }
      let list = songList.map(item => {
        return {
          title: item.name,
          singer: item.ar && item.ar[0].name,
          alname: item.al && item.al.name,
          pic: item.al && item.al.picUrl,
          id: item.id
        }
      })
      const action = actionsCreatorsPlayer.getSrc(item.id)
      const action2 = actionsCreatorsPlayer.setCurrentPlayer(info)
      const action3 = actionsCreatorsPlayer.setPlaylist(list)
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);