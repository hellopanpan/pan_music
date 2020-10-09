import React, {useState, useRef, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import * as api from '@/api'
 
// 图标
import {
  AlignLeftOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { 
  SingerWraper,
  SingerList
} from './style';

import {categoryTypes, alphaTypes} from '@/api/cofig'

import ScrollUi from './basicUi/scroll'


function Singer (props){
  const wrapRef = useRef();
  const usescollRef = useRef();
  const [artists, SetArtists] = useState([]);
  const dataRef = useRef();
  const pageRef = useRef(0);
  // 获取数据
  const getArtists = (initial, cat) => {
    let params = {
      offset: pageRef.current,
      initial,
      cat
    }
    if (pageRef.current > 100) return
    api.getArtists(params).then(res => {
      if (!dataRef.current) dataRef.current = res.artists || []
      if (dataRef.current) dataRef.current  = dataRef.current.concat(res.artists || [])
      
      SetArtists(dataRef.current)
      pageRef.current += 50
      console.log(artists)
    })
  }
  
  // 点击
  const clickButtonCate = (key) => {
    debugger
    console.log(key)
  }

  useEffect(() => {
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: true,
      bounce: true,
      mouseWheel: true,
      pullUpLoad: {
        threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
      }
    });
    usescollRef.current.on('pullingUp', () => {
      getArtists()
      setTimeout(()=>{
        usescollRef.current.finishPullUp()
      }, 2000)
    })
  }, []);

  useEffect(() => {
    getArtists()
  }, []);
  return (
    <SingerWraper>
      <ScrollUi data={categoryTypes} title='分类（默认）：' clickButton={clickButtonCate}></ScrollUi>
      <ScrollUi data={alphaTypes} title='首字母：'></ScrollUi>
      <SingerList>
        <div ref={wrapRef} className="wraper">
          <div className='ul-list'>
            {
              artists.map((item, index) => {
                return (
                  <div className="list" key={index}>
                    <img src={item.picUrl + '?param=100x100'} alt=""/>
                    <span>{ item.name }</span>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </SingerList>
      <div className="player-bottom"></div>
    </SingerWraper>
  ); 
};

export default connect(null, null)(Singer);