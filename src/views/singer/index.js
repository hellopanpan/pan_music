import React, {useState, useRef, useEffect, useCallback} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import * as api from '@/api'
import { renderRoutes } from 'react-router-config';
import LazyLoad, {forceCheck}from 'react-lazyload';

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
  const categoryRef = useRef('');
  const cateMoreRef = useRef({});
  const initialRef = useRef('');


  // 获取数据
  const getArtists = useCallback((cat, initial) => {
    let params = {
      offset: pageRef.current,
      initial: initialRef.current,
      type: cateMoreRef.current.type,
      area: cateMoreRef.current.area
    }
    if (pageRef.current > 100) return
    let ajaxObj  = {}
    if (initialRef.current || categoryRef.current ) {
      ajaxObj = api.getArtistsList(params)
    } else {
      ajaxObj = api.getArtists(params)
    }
    ajaxObj.then(res => {
      if (!pageRef.current) dataRef.current = res.artists || []
      if (pageRef.current) dataRef.current  = dataRef.current.concat(res.artists || [])
      
      SetArtists(dataRef.current)
      pageRef.current += 50
      
    })
  },[])

  
  // 点击
  const clickButtonCate = (item) => {
    console.log(item)
    if(categoryRef.current === item.key) return;
    categoryRef.current = item.key;
    cateMoreRef.current = item.more || {};
    pageRef.current = 0;
    getArtists()
  }

  // 点击字母
  const clickButtonAlpha = (item) => {

    if(initialRef.current === item.key) return;
    initialRef.current = item.key;
    pageRef.current = 0;
    getArtists()
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
      }, 3000)
    })
    usescollRef.current.on('scroll', () => {
      forceCheck()
    })
  }, [getArtists]);

  useEffect(() => {
    getArtists()
  }, [getArtists]);

  // 跳转
  const goSingerDetail =  (item) => {
    props.history.push({
      pathname : '/singerDetail/'+ item.id,
    });
  }



  return (
    <SingerWraper>
      { renderRoutes(props.route.routes) }
      <ScrollUi data={categoryTypes} title='分类（默认）：' clickButton={clickButtonCate}></ScrollUi>
      <ScrollUi data={alphaTypes} title='首字母：' clickButton={clickButtonAlpha} bounceTime={200}></ScrollUi>
      <SingerList>
        <div ref={wrapRef} className="wraper">
          <div className='ul-list'>
            {
              artists.map((item, index) => {
                return (
                  <div className="list" key={index} onClick={() => {goSingerDetail(item)}}>
                    <LazyLoad >
                      <img src={item.picUrl + '?param=100x100'} alt=""/>
                    </LazyLoad>
                    <span>{ item.name }</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </SingerList>
    </SingerWraper>
  ); 
};

export default connect(null, null)(Singer);