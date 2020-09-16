import React , {useState, useRef} from 'react';
import { connect } from 'react-redux'
import { Input } from 'antd';
import { actionsCreators as actionsCreatorsPlayer } from '@/views/player/store'
// 样式
import { 
  SearchWraper,
  SearList
} from './style';
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
    if (!e.target.value) return;
    const val = e.target.value;
    setKeyword(val)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      getSeachList(val)
    }, 500);
  }
  return (
    <SearchWraper>
      <Input placeholder="Basic usage" value={keyword}  onChange={changeWord}/>
      <div>search</div>
      <SearList>
        {
          songs.map((item, index) => {
            return (
              <div key={index} className="list-item" onClick={()=> {openMusic(item)}} >{item.name}</div>
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
        alname: item.album && item.album.artist.name,
        pic: item.album && item.album.artist.img1v1Url,
        id: item.id
      }
      console.log(info)
      const action = actionsCreatorsPlayer.getSrc(item.id)
      const action2 = actionsCreatorsPlayer.setCurrentPlayer(info)
      const action3 = actionsCreatorsPlayer.setPlaylist(info)
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);