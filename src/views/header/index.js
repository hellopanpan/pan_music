import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import { getSongUrl } from '@/utils'

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
  HeaderSearch,
  SlideIn,
  Recomand
} from './style';

function Header (props){
  console.log(props)
  let { focused }  = props;
  let { banner }  = props;
  let { personal }  = props;
  let { setFocusFn } = props;
  let { getBaner } = props;
  let { getPersonal } = props;
  const [state, setState] = useState({
    text: "",
    checked: true,
    checkArr: [{name: '推荐'},{name: '歌手'},{name: '排行榜'}]
  });
  const [check, setCheck] = useState(0);
  const audioRef = useRef();
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
  useEffect(() => {
    audioRef.current.src = getSongUrl(1400256289)
    audioRef.current.autoplay = true
    audioRef.current.loop = true
    getBaner();
    getPersonal();
  }, [])
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
            <div className="item" key={index}>
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
      <CSSTransition
        in={focused}
        timeout={1000}
        classNames="fade"
      >
        <HeaderSearch onFocus={setFocusFn.bind(this, true)} onBlur={setFocusFn.bind(this, false)} className="search"></HeaderSearch>
      </CSSTransition>
      <audio 
        controls="controls"
        ref={audioRef}
      ></audio>
    </HeaderWraper>
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
    setFocusFn(flag) {
      console.log(flag)
      const action = actionsCreators.getList(flag)
      dispatch(action)
    },
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