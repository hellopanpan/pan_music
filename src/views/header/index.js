import React, {useState} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
// 图标
import {
  AlignLeftOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { 
  HeaderWraper,
  Nav,
  NavTab,
  NavTabItem,
} from './style';

function Header (props){
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
  const goSearch = () => {
    props.history.push({
      pathname : '/search'
    });
  }
  return (
    <HeaderWraper>
      <Nav>
        <AlignLeftOutlined />
        <span>音悦台</span>
        <SearchOutlined onClick={goSearch}/>
      </Nav>
      <NavTab>
        {
          state.checkArr.map((item, index) => {
          return <NavTabItem key={index} onClick={changeTab.bind(this, index)} className={check === index ? 'active': ''} >{item.name}</NavTabItem>
          })
        }
      </NavTab>
    </HeaderWraper>
  ); 
};

export default connect(null, null)(Header);