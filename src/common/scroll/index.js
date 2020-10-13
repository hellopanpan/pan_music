import React, {useState, useRef, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'

import BScroll from 'better-scroll'

// 样式
import { 
  ScrollCont
} from './style';


function Scroll (props){

  const wrapRef = useRef();
  const usescollRef = useRef();

  // 滚动
  useEffect(() => {
    if (!wrapRef.current) return
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: true,
      bounce: true,
      mouseWheel: true,
      probeType: 3
    });  
  }, []);

  return (
    <ScrollCont ref={wrapRef}>
      {props.children}
    </ScrollCont>
  )
}



export default Scroll;