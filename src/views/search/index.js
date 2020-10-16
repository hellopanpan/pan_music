import React , {useState, useCallback} from 'react';
import { connect } from 'react-redux'
import { Input } from 'antd';
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
import Scroll from '@/common/scroll'

// 样式
import { 
  SearchWraper,
  SearList
} from './style';

// 图标
import {
  ArrowLeftOutlined,
  CloseOutlined
} from '@ant-design/icons';

import { getSearch } from '@/api'
import {searchKey} from '@/api/cofig'
import { useEffect } from 'react';

function Header (props){
  const {openMusic}  = props
  const [keyword, setKeyword] = useState('')
  const [songs, setSongs] = useState([])

  const getSeachList = useCallback(() => {
    // 搜索结果
    getSearch({
      keywords: keyword
    }).then(res => {
      setSongs(res.result.songs || [])
    })
  }, [keyword])
  const changeWord = useCallback((e) => {
    const val = e.target.value;
    setKeyword(val)
  },[])

  const closeKey = (e) => {
    setKeyword('')
    setSongs([]) 
  }

  // 搜索
  const hotSearch = (key) => {
    setKeyword(key)
  };

  useEffect(() => {
    if (!keyword) return setSongs([]) 
    getSeachList()
  }, [keyword, getSeachList])

  return (
    <SearchWraper>
      <div className="serch">
        <ArrowLeftOutlined onClick={() => window.history.back()}/>
        <Input className="input-it" placeholder="输入搜索内容" value={keyword}  onChange={changeWord}/>
        <CloseOutlined onClick={closeKey}/>
      </div>
      {
        !keyword ? 
          <div className="suggest">
            <div className="title">推荐搜索</div>
            <div className="list">
              {
                searchKey.map((item, index) => {
                  return (
                    <div className="item" key={index} onClick={() => {hotSearch(item)}} >{item}</div>
                  )
                })
              }
            </div>
          </div>
        : null
      }
      <SearList>
        <Scroll>
          <div>
          {
            songs.map((item, index) => {
              return (
                <div key={index} className="list-item" onClick={(e)=> {openMusic(e, item)}}>
                  <div className="title">{item.name}</div>
                  <div>{item.artists && item.artists[0].name} - {item.album && item.album.name}</div>
                </div>
                
              )
            })
          }
          </div>
        </Scroll>
        
      </SearList>
    </SearchWraper>
    
  ); 
};
const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openMusic(e, item) {
      let info = {
        title: item.name,
        singer: item.artists && item.artists[0].name,
        alname: item.album && item.album.name,
        pic: item.album && item.album.artist.img1v1Url,
        id: item.id
      }
      console.log(info)
      const action = actionsCreatorsPlayer.getSrc(item.id)
      const action2 = actionsCreatorsPlayer.setCurrentPlayer(info)
      const action3 = actionsCreatorsPlayer.pushPlaylist(info)
      const action4 = actionsCreatorsPlayer.setXY({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY})
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
      dispatch(action4)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);