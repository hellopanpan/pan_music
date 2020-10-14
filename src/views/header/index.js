import React, {useState, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
// 图标
import {
  AlignLeftOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { 
  Wrap,
  HeaderWraper,
  Nav,
  NavTab,
  NavTabItem,
} from './style';

import Recommend from '@/views/recomend/index'
import Singer from '@/views/singer/index'
import TopList from '@/views/topList/index'


function Header (props){
  const {openPlayer} = props

  const [state] = useState({
    text: "",
    checked: true,
    checkArr: [{name: '推荐'},{name: '歌手'},{name: '排行榜'}]
  });
  const [check, setCheck] = useState(-1);
  
  const changeTab = (index) => {
    console.log(index);
    setCheck(index)
    localStorage.setItem('index-tab', index)
  }

  const goSearch = () => {
    props.history.push({
      pathname : '/search'
    });
  }

  // 保留tab
  useEffect(() => {
    let tab = localStorage.getItem('index-tab')
    if (!tab) return
    setCheck(parseInt(tab))

  },[])


  return (
    <Wrap>
      <HeaderWraper v-loading="loading">
        <Nav>
          <AlignLeftOutlined />
          <span>音悦台</span>
          <SearchOutlined onClick={goSearch}/>
        </Nav>
        <NavTab>
          {
            state.checkArr.map((item, index) => {
            return <NavTabItem key={index} onClick={changeTab.bind(this, index + 1)} className={check === index + 1 ? 'active': ''} >{item.name}</NavTabItem>
            })
          }
        </NavTab>
      </HeaderWraper>
      <div className="cont-wrap">
        {check === 1 ? <Recommend history={props.history}></Recommend> : check === 2 ? <Singer history={props.history} ></Singer> : check === 3 ?<TopList history={props.history}></TopList> : null}
      </div>
      { openPlayer ? <div className="player-wrap"></div> : null}
      
    </Wrap>
    
  ); 
};
const mapStateToProps = (state) => {
  return {
    openPlayer: state.getIn(['player', 'openPlayer']),
  };
};

export default connect(mapStateToProps, null)(Header);