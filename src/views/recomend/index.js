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
  SlideIn,
  Recomand
} from './style';

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
    <HeaderWraper>
      <SlideIn>
        <Carousel afterChange={onChange} autoplay>
          {banner.map(item => {
            return <div key={item.targetId}><img src={item.imageUrl}  className="img-pic" alt=""/></div>
          })}
        </Carousel>
      </SlideIn>
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