import React, { useEffect} from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
// import { getSongUrl } from '@/utils'

// import { Carousel } from 'antd';
// 图标
import {

} from '@ant-design/icons';
import { 

} from './style';

function Header (props){
  console.log(props)

  // const [state] = useState({
  //   text: "",
  //   checked: true,
  //   checkArr: [{name: '推荐'},{name: '歌手'},{name: '排行榜'}]
  // });

  useEffect(() => {
  }, [])
  return (
    <CSSTransition>
      <div>212</div>
    </CSSTransition>
    
  ); 
};
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    banner: state.getIn(['header', 'banner']),
    personal: state.getIn(['header', 'personal'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFocusFn(flag) {
      console.log(flag)
      const action = actionsCreators.getList(flag)
      dispatch(action)
    },
    getBaner() {
      const action = actionsCreators.getBaner()
      dispatch(action)
    },
    getPersonal() {
      const action = actionsCreators.getPersonal()
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);