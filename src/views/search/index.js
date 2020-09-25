import React , {useState, useRef} from 'react';
import { connect } from 'react-redux'
import { Input } from 'antd';
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
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

import { getSuggest, getSearch } from '@/api'
function Header (props){
  const {openMusic}  = props
  const [keyword, setKeyword] = useState('')
  const [songs, setSongs] = useState([])
  const timerRef = useRef()
  const getSeachList = (keywords) => {
    getSuggest({
      keywords
    }).then(res => {
      
    })
    // 搜索结果
    getSearch({
      keywords
    }).then(res => {
      setSongs(res.result.songs || [])
    })
  }
  const changeWord = (e) => {
    const val = e.target.value;
    setKeyword(val)
    clearTimeout(timerRef.current)
    if (!e.target.value) return;
    timerRef.current = setTimeout(() => {
      getSeachList(val)
    }, 500);
  }
  const closeKey = (e) => {
    setKeyword('')
    setSongs([]) 
  }
  return (
    <SearchWraper>
      <div className="serch">
        <ArrowLeftOutlined onClick={() => window.history.back()}/>
        <Input className="input-it" placeholder="输入搜索内容" value={keyword}  onChange={changeWord}/>
        <CloseOutlined onClick={closeKey}/>
      </div>
      
      <SearList>
        {
          songs.map((item, index) => {
            return (
              <div key={index} className="list-item" onClick={()=> {openMusic(item)}}>
                <div className="title">{item.name}</div>
                <div>{item.artists && item.artists[0].name} - {item.album && item.album.name}</div>
              </div>
              
            )
          })
        }
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
    openMusic(item) {
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
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);