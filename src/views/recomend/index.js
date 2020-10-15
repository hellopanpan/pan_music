import React, {useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'

import { Carousel } from 'antd';
// 图标
import {
  CustomerServiceOutlined
} from '@ant-design/icons';

import { 
  HeaderWraper,
  SlideWrap,
  SlideIn,
  Recomand
} from './style';

import * as api from '@/api'
import Scroll from '@/common/scroll'

function Header (props){
  let { banner, personal, getBaner, getPersonal, openMusic}  = props;

  const getW = (num) => {
    return parseInt(num / 10000) + '万'
  }
  
  const goDetail = (id) => {
    props.history.push({
      pathname : '/detail',
      state :{
        id
      }
    });
  };
  useEffect(() => {
    getBaner();
    getPersonal();
  }, [getBaner, getPersonal])

  const openMusicAnd = (id) => {
    let params = {
      ids: id
    }
    api.getSongsDetail(params).then(res => {
      if (res.songs && res.songs[0]) openMusic(res.songs[0])
    })
  }

  return (
    <Scroll>
      <HeaderWraper>
        <SlideWrap>
          <div className="bg-img"></div>
          <SlideIn>
            <Carousel autoplay>
              {banner.map(item => {
                return <div key={item.targetId} onClick={() => openMusicAnd(item.targetId)}><img src={item.imageUrl && item.imageUrl + '?param=700x500'}  className="img-pic" alt=""/></div>
              })}
            </Carousel>
          </SlideIn>
        </SlideWrap>
        
        <Recomand>
          {personal.map((item, index) => {
            return (
              <div className="item" key={index} onClick={() => {goDetail(item.id)}}>
                <div className="heder">
                  <CustomerServiceOutlined />
                  <span className="con">{getW(item.playCount)}</span>
                </div>
                <img src={item.picUrl} alt=""/>
                <div className="dis">
                  {item.name}
                </div>
              </div>
            )
          })}
        </Recomand> 
      </HeaderWraper>
    </Scroll>
    
  ); 
};
const mapStateToProps = (state) => {
  return {
    banner: state.getIn(['recomend', 'banner']),
    personal: state.getIn(['recomend', 'personal'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBaner() {
      const action = actionsCreators.getBaner()
      dispatch(action)
    },
    getPersonal() {
      const action = actionsCreators.getPersonal()
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);