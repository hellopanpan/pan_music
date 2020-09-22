import React, { useState, useEffect, useRef, useCallback} from 'react';
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import { actionsCreators } from '../store'
import { paserLrc } from '@/utils/lrcParse'
import { 
  Wrap
} from './style';

function LRC (props, ref){
  let {lyric, current, src}  = props
  let {getlrc}  = props
  const wrapRef = useRef();
  const usescollRef = useRef();
  const lyricLineRefs = useRef([]);
  const [yy, setYy] = useState([
    12,32,32,23,1,23,23,2,3,23,23,122121,12,21,21,2121,2,21,1,2,21,12,
  ])
  const [moving, SetMoving] = useState(true)
  const [time, setTime] = useState([
    ''
  ])
  const [currentLineNum,setCurrentLineNum] = useState(-1)
  useEffect(() => {
    // 获取歌词
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: false,
      bounce: true
    });
    usescollRef.current.on('touchEnd', () => {
      console.log('flick-------')
      SetMoving(false)
    })
  });
  // 获取歌词
  useEffect(() => {
    if (lyric) {
      let arr = paserLrc(lyric)
      setTime(arr.time) 
      setYy(arr.lrc)
    }
  }, [lyric])

  const goNext = useCallback((max) => {
    if (currentLineNum < 5 || currentLineNum >= max) return;
    if (!moving) return 
    let lineEl = lyricLineRefs.current[currentLineNum-3].current;
    usescollRef.current.scrollToElement(lineEl, 1000);
  }, [currentLineNum, moving])
  // 跳转
  useEffect(() => {
    time.forEach((item, index) => {
      item = item.replace(/\[/,'').replace(/\]/,'')
      let arrtime = item.split(':')
      let time = (parseInt(arrtime[0]) * 60 + parseFloat(arrtime[1]))
      if (parseInt(current) === parseInt(time)) {
        setCurrentLineNum(index)
        goNext()
      }
    })
  }, [current,goNext, time])
  
  useEffect(() => {
    if (!src) return;
    let id = src.match(/\d{6,20}/)[0]
    getlrc(id)
  }, [src, getlrc]) 
  // 获取歌词
  return (
    <div>
      <Wrap ref={wrapRef}>
        <div>
          {
            yy.map((item,index) => {
              lyricLineRefs.current[index] = React.createRef();
              return (
              <div className={`content ${index === currentLineNum ? 'color': ''}`} key={index} ref={lyricLineRefs.current[index]}>{item}</div>
              );
            })
          }
        </div>
      </Wrap>
    </div>
    
  )
}
const mapStateToProps = (state) => {
  return {
    lyric: state.getIn(['player', 'lrc']),
    src: state.getIn(['player', 'src']),
    current: state.getIn(['player', 'current']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getlrc(id) {
      const action = actionsCreators.getlrc(id);
      dispatch(action)
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LRC);