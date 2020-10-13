import React, {useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'

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

import Scroll from '@/common/scroll'

function Header (props){
  let { banner, personal, getBaner, getPersonal}  = props;
  console.log('recomend --- ' + props)
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  }
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
  }
  useEffect(() => {
    getBaner();
    getPersonal();
  }, [getBaner, getPersonal])
  return (
    <Scroll>
      <HeaderWraper>
        <SlideWrap>
          <div className="bg-img"></div>
          <SlideIn>
            <Carousel afterChange={onChange} autoplay>
              {banner.map(item => {
                return <div key={item.targetId}><img src={item.imageUrl && item.imageUrl + '?param=700x500'}  className="img-pic" alt=""/></div>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);