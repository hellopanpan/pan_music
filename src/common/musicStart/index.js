import React, { useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

// 样式
import { 
  Wrap
} from './style';


const  MusicStart = forwardRef((props, ref) => {
  const wrapRef = useRef([])
  const iconRef = useRef([])
  const arrRef = useRef([])
   
  //获取传入的
  useImperativeHandle(ref, () => ({
    getPositon
  }));

  // 生成数组
  useEffect(() => {
    let i = 0
    while(i < 10) {
      arrRef.current.push({loading: false})
      i++;
    }
  },[]);

  // 动画 
  const getPositon = (x,y, flag = true) => {
    if (!flag) return
    for (let index = 0; index< arrRef.current.length; index ++ ) {
      let item = arrRef.current[index]
      console.log(index +'_'+x +'_'+ y)
      console.log(arrRef.current)
      if (!arrRef.current[index].loading) {
        console.log(index)
        arrRef.current[index].loading = true;
        let i = index;
        let wrap = wrapRef.current[i].current
        let icon = iconRef.current[i].current
        // 运动
        wrap.style['opacity'] = "1"
        wrap.style['left'] = x + 'px'
        wrap.style['top'] = y + 'px'
        wrap.style['display'] = "block"
        wrap.style['transform'] = `translate3d(0, 750px, 0)`
        icon.style['transform'] = `translate3d(-60px, 0, 0)`
        wrap.addEventListener('transitionend', () => {
          // 恢复
          wrap.style['transform'] = `translate3d(0, 0, 0)`;
          icon.style['transform'] = `translate3d(0, 0, 0)`;
          wrap.style['left'] = x + 'px'
          wrap.style['top'] = 40 + 'px'
          wrap.style['opacity'] = "0"
        }, false);
        setTimeout(() => {
          arrRef.current[index].loading = false
        }, 2000);
        break
      }
    }
    
  }
  return(
    <Wrap>
        {
          arrRef.current.map((item, index) => {
            wrapRef.current[index] = React.createRef();
            iconRef.current[index] = React.createRef();
            return (
              <div className="item" ref={wrapRef.current[index]} key={index}>
                <div className="icon" ref={iconRef.current[index]}>
                  <div className="iconfont icon-music-note"></div>
                </div>
              </div>
            )
          })
        }
    </Wrap>
  )
})

export default MusicStart;