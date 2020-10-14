import React, { useState, useEffect, memo, useRef} from 'react';
import { connect } from 'react-redux'
import { actionsCreators } from './store'

// 图标
import {
  PlayCircleFilled,
  DeleteFilled,
} from '@ant-design/icons';

import { 
  AudioWrap,
  IPlayer,
  Nplayer,
  PlayListI
} from './style';

import Scroll from '@/common/scroll'
import { List } from 'immutable';

const PlayerList = (props) => {
  
  let { playList,  player2, showListflag} = props;
  let { openMusic, removeSong, goList} = props;

  const [start, setStart] = useState()
  const [distance, setDistance] = useState(0)
  const [initialed, setInitialed] = useState(false)

  const moveRef = useRef()
  const canmoveRef = useRef(true)
  const startRef = useRef(0)

  // 放歌
  const goSong =  (e, item) => {
    e.stopPropagation();
    openMusic(item)
  }

  // 清除 放歌
  const  goremoveSong =  (e, item, player2, playList) => {
    e.stopPropagation();
    removeSong(item, player2, playList)
  }

  // show
  useEffect(() => {
    moveRef.current.style['transition'] = `all 0.5s`
    moveRef.current.style['transform'] = `translate(0, 0px)`
  }, [showListflag])

  // 滚动条
  const handleScroll = (pos) => {
    canmoveRef.current = (parseInt(pos.y) == 0)
  }
  // 滑动start
  const handleTouchStart = (e) => {
    if (!canmoveRef.current) return 
    console.log(e.nativeEvent.touches[0].pageY)
    setStart(e.nativeEvent.touches[0].pageY)
    startRef.current = e.nativeEvent.touches[0].pageY
    setInitialed(true);
  }
  // 滑动move
  const handleTouchMove = (e) => {
    if (!canmoveRef.current || !initialed) return 
    let distance2 = e.nativeEvent.touches[0].pageY - start
    setDistance(distance2);
    console.log(distance2);
    moveRef.current.style['transition'] = `all 0s`
    moveRef.current.style['transform'] = `translate(0, ${distance}px)`
  }
  // 滑动End
  const handleTouchEnd = (e) => {
    setInitialed(false);
    moveRef.current.style['transition'] = `all 0.5s`
    if (distance > 200) {
      moveRef.current.style['transform'] = `translate(0, 600px)`
      goList(false)
    }
    if (distance <= 200) moveRef.current.style['transform'] = `translate(0, 0)`
  }


  return (
    <PlayListI onClick={() => { goList(false) }}>
      <div className="wrap" 
        onClick={(e) => {e.stopPropagation()}}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={moveRef}
      >
        <Scroll bounceTop={false} handleScroll={handleScroll}>
          <div>
              {
                playList.map(((item, index) => {
                  return (
                    <div className="itemL" key={index} onClick={(e) => {goSong(e, item)}}>
                      <div className="playcon">
                        {player2.id === item.id ? <PlayCircleFilled /> : null}
                      </div>
                      <div className="name2">{item.title}</div>
                      <div className="icos">
                        <DeleteFilled onClick={(e) => {goremoveSong(e, item, player2, playList)}}/>
                      </div>
                    </div>
                  )
                }))
              }
            </div>
        </Scroll>
      </div>
    </PlayListI>
  )
}
const mapStateToProps = (state) => {
  return {
    player2: state.getIn(['player', 'playerinfo']),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openMusic(item) {
      const action = actionsCreators.getSrc(item.id)
      const action2 = actionsCreators.setCurrentPlayer(item)
      dispatch(action)
      dispatch(action2)
    },
    removeSong(item, player2, list) {
      if ((item.id === player2.id) && list.length >= 2) {
        const action = actionsCreators.goNext(item.id, list, true)
        dispatch(action)
      }
      const action = actionsCreators.removeSong(item)
      dispatch(action)
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);