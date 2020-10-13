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
  const indexRef = useRef(-1);
  const usescollRef = useRef();
  const lyricLineRef = useRef([]);
  
  const [yy, setYy] = useState(['歌词加载中..'])
  const [moving, SetMoving] = useState(true)
  const [time, setTime] = useState([''])
  const [currentLineNum, setCurrentLineNum] = useState(-1)

  useEffect(() => {
    // 获取歌词
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollY: true,
      click: false,
      bounce: true,
      mouseWheel: true,
      probeType: 3
    });
  });
  // 获取歌词
  useEffect(() => {
    if (lyric) {
      let arr = paserLrc(lyric)
      setTime(arr.time) 
      setYy(arr.lrc)
    }
  }, [lyric])

  const goNext = (max) => {
    if (indexRef.current < 5 || indexRef.current >= max) return;
    if (!moving) return 
    let lineEl = lyricLineRef.current[indexRef.current-5].current;
    usescollRef.current.scrollToElement(lineEl, 1000);
  };
  // 跳转
  useEffect(() => {
    time.forEach((item, index) => {
      item = item.replace(/\[/,'').replace(/\]/,'')
      let arrtime = item.split(':')
      let time = (parseInt(arrtime[0]) * 60 + parseFloat(arrtime[1]))
      if (parseInt(current) === parseInt(time)) {
        indexRef.current = index
        setCurrentLineNum(index)
        goNext()
      }
    })
  }, [current])
  
  useEffect(() => {
    if (!src) return;
    let id = src.match(/\d{6,20}/)
    if (id) getlrc(id[0])
  }, [src, getlrc]) 
  // 获取歌词
  return (
    <div>
      <Wrap ref={wrapRef}>
        <div>
          {
            yy.map((item,index) => {
              lyricLineRef.current[index] = React.createRef();
              return (
              <div className={`content ${index === currentLineNum ? 'color': ''}`} key={index} ref={lyricLineRef.current[index]}>{item}</div>
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