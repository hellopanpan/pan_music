import React, {useState, useRef, useEffect} from 'react';

import BScroll from 'better-scroll'

import { 
  SingerWrap
} from './style';

function Scroll (props){

  const [check, setCheck] = useState(0);
  const {data, title} = props;
  const {clickButton} = props;

  const wrapRef = useRef();
  const usescollRef = useRef();


  useEffect(() => {
    usescollRef.current = new BScroll(wrapRef.current, {
      scrollX: true,
      click: true,
      bounce: true,
      mouseWheel: true
    });
  });

  return (
    <SingerWrap>
      <div  ref={wrapRef} className="list-wrapper">
        <div className="cate" >
          <p className="title">{title}</p>
          {
            data.map(item => {
              return <div className="cate-item" key={item.name} onClick={() => clickButton(item)}>{item.name}</div>
            })
          }
        </div>
      </div>
    </SingerWrap>
  ); 
};

export default Scroll;