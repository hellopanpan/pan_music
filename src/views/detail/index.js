import React, { useState, useEffect} from 'react';
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

function Header (props){

  let { openMusic, openPlayer } = props
  const [songList, setSongList] = useState([]);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    if (!props.history.location.state) return
    getPlaylistDetail({id: (props.history.location.state && props.history.location.state.id) || '5007828838'}).then(res => {
      setSongList((res.playlist && res.playlist.tracks) || []);
      setPlaylist(res.playlist);
    })
  },[props.history])
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
                      <PlayListItem key={index} onClick={()=> {openMusic.call(this, item, songList)}}>
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
      </Wraper>
    </CSSTransition>
  ); 
};
const mapStateToProps = (state) => {
  return {
    openPlayer: state.getIn(['player', 'openPlayer']),
    focused: state.getIn(['header', 'focused']),
    banner: state.getIn(['header', 'banner']),
    personal: state.getIn(['header', 'personal'])
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