import React, {useState, useEffect} from 'react';
// import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as api from '@/api'

// 样式
import { 
  Wraper
} from './style';

import Scroll from '@/common/scroll'

function TopList (props){
  const [list, setList] = useState([])

  // 请求数据
  useEffect(() => {
    api.getTopList().then(res => {
      setList(res.list || [])
    })
  }, [])

  // 跳转
  const goSingerDetail =  (item) => {
    props.history.push({
      pathname : '/detail',
      state :{
        id: item.id
      }
    });
  }

  return (
    <Wraper>
      <Scroll>
        <div>
          <div className="gov">
            <div className="title">热门排行榜</div>
            <div className="list">
              {
                list.slice(0, 4).map((item, index) => {
                  return(
                    <div className="item" key={index} onClick={ () => goSingerDetail(item)}>
                      <img src={item.coverImgUrl ? item.coverImgUrl + '?param=100x100' : null} alt=""/>
                      <div className="right">
                        {
                          item.tracks && item.tracks.map((item2, index2) => {
                            return (
                              <div key={index2}>{index2 + 1}.{ item2.first} - {item2.second}</div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="global">
            <div className="title">全球榜</div>
            <div className="list">
              {
                list.slice(4).map((item, index) => {
                  return(
                    <div className="item" key={index} onClick={ () => goSingerDetail(item)}>
                      <img src={item.coverImgUrl ? item.coverImgUrl + '?param=100x100': null} alt=""/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        
      </Scroll>
    </Wraper>
  )
}
export default connect(null, null)(TopList);