import React, { useRef, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'

import BScroll from 'better-scroll'

// 样式
import { 
  ScrollCont
} from './style';


function Scroll (props){
  const {bounceTop, bounceBottom, lineEl} = props
  const {handleScroll} = props
  const wrapRef = useRef();
  const usescollRef = useRef();

  // 滚动元素
  useEffect(() => {
    if (lineEl) usescollRef.current.scrollToElement(lineEl, 1000);
  }, [lineEl])

  // 滚动
  useEffect(() => {
    if (!wrapRef.current) return
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: true,
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
  }, [bounceTop, bounceBottom, handleScroll]);

  return (
    <ScrollCont ref={wrapRef}>
      {props.children}
    </ScrollCont>
  )
}

Scroll.defaultProps = {
  bounceTop: true,
  bounceBottom: true,
  handleScroll: (pos) => {},
  lineEl: null
}

export default Scroll;