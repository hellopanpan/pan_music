import React, {useState, useRef, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'

import BScroll from 'better-scroll'

// 样式
import { 
  ScrollCont
} from './style';


function Scroll (props){
  const {bounceTop, bounceBottom} = props
  const {handleScroll} = props
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
      probeType: 3,
      bounce:{
        top: bounceTop,
        bottom: bounceBottom
      }
    }); 
    usescollRef.current.on('scroll', (pos) => {
      handleScroll(pos)
    });
  }, []);

  return (
    <ScrollCont ref={wrapRef}>
      {props.children}
    </ScrollCont>
  )
}

Scroll.defaultProps = {
  bounceTop: true,
  bounceBottom: true,
  handleScroll: (pos) => {}
}

export default Scroll;