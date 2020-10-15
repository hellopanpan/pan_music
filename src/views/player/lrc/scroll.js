import React, { useState, useEffect, useRef, useCallback} from 'react';
import Scroll from '@/common/scroll'


function LrcScroll (props){
  const {yy, currentLineNum} = props

  const wrapRef = useRef();
  const indexRef = useRef(-1);
  const usescollRef = useRef();
  const lyricLineRef = useRef([]);

  const [lineEl, setLineEl] = useState()

  const goNext = (max) => {
    if ( currentLineNum < 5 ||  currentLineNum >= max) return;
    let lineEl = lyricLineRef.current[currentLineNum-5].current;
    setLineEl(lineEl)
  };

  useEffect(() => {
    goNext(yy.length)
  }, [currentLineNum, goNext]);

  return (
    <Scroll lineEl={lineEl}>
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
    </Scroll>
  )
}

LrcScroll.defaultProps = {
  yy: []
}
export default React.memo(LrcScroll)