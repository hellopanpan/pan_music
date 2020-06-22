import React, { useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
import Player from '@/views/player'
// import { getSongUrl } from '@/utils'

// import { Carousel } from 'antd';
// 图标
import { getPlaylistDetail } from '@/api'
import { 
  PlayList,
  PlayListItem
} from './style';

function Header (props){
  console.log(props)

  let { openMusic } = props
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    getPlaylistDetail({id: '5066165290'}).then(res => {
      setSongList((res.playlist && res.playlist.tracks) || [])
    })
  }, [])
  return (
    <CSSTransition timeout={1000}>
      <div>212

        <PlayList>
          {
            songList.map( (item, index) => {
              return (
                <PlayListItem key={index} onClick={()=> {openMusic.call(this, item.id)}}>
                  <div className="num">{index + 1}</div>
                  <div className="right">
                    <div className="title">{item.name}</div>
                    <div className="discribe">{item.ar && item.ar[0].name} {item.al && item.al.name}</div>
                  </div>
                </PlayListItem>
              )
            })
          }
          
        </PlayList>
        <Player></Player>
      </div>
    </CSSTransition>
    
  ); 
};
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    banner: state.getIn(['header', 'banner']),
    personal: state.getIn(['header', 'personal'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMusic(id) {
      const action = actionsCreatorsPlayer.getSrc(id)
      dispatch(action)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);