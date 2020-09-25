import React, {useState, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'

import { Carousel } from 'antd';
// 图标
import {
  AlignLeftOutlined,
  SearchOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';
import { 
  HeaderWraper,
  Nav,
  NavTab,
  NavTabItem,
  SlideIn,
  Recomand
} from './style';

function Header (props){
  let { banner, personal, getBaner, getPersonal}  = props;
  const [state] = useState({
    text: "",
    checked: true,
    checkArr: [{name: '推荐'},{name: '歌手'},{name: '排行榜'}]
  });
  const [check, setCheck] = useState(0);
  
  const changeTab = (index) => {
    console.log(index);
    setCheck(index)
  }
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
      <Nav>
        <AlignLeftOutlined />
        <span>音悦台</span>
        <SearchOutlined onClick={getBaner}/>
      </Nav>
      <NavTab>
        {
          state.checkArr.map((item, index) => {
          return <NavTabItem key={index} onClick={changeTab.bind(this, index)} className={check === index ? 'active': ''} >{item.name}</NavTabItem>
          })
        }
      </NavTab>
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
    banner: state.getIn(['header', 'banner']),
    personal: state.getIn(['header', 'personal'])
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