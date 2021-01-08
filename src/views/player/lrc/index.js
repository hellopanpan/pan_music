import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { actionsCreators } from '../store'
import { paserLrc } from '@/utils/lrcParse'
import LrcScroll from './scroll'
import { 
  Wrap
} from './style';

function LRC (props, ref){
  let {lyric, current, src}  = props
  let {getlrc}  = props
  
  
  const [yy, setYy] = useState(['歌词加载中..'])
  const [currentLineNum, setCurrentLineNum] = useState(-1)
  const [time, setTime] = useState([''])

  // 获取歌词
  useEffect(() => {
    if (lyric) {
      let arr = paserLrc(lyric)
      setTime(arr.time) 
      setYy(arr.lrc)
    }
  }, [lyric])

  
  // 跳转
  useEffect(() => {
    time.forEach((item, index) => {
      item = item.replace(/\[/,'').replace(/\]/,'')
      let arrtime = item.split(':')
      let time = (parseInt(arrtime[0]) * 60 + parseFloat(arrtime[1]))
      if (parseInt(current) === parseInt(time)) {
        setCurrentLineNum(index)
      }
    })
  }, [current, time])
  
  useEffect(() => {
    if (!src) return;
    let id = src.match(/\d{5,20}/)
    if (id) getlrc(id[0])
  }, [src, getlrc]) 
  // 获取歌词
  return (
    <Wrap >
      <LrcScroll yy={yy} currentLineNum={currentLineNum}></LrcScroll>
    </Wrap>
  )
}
const mapStateToProps = (state) => {
  return {
    lyric: state.player.get('lrc'),
    src: state.player.get('src'),
    current: state.player.get('current'),
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