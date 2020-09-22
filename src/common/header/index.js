import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import { 
  HeaderWraper,
  Hederimg,
  Nav,
  HeaderSearch
} from './style';

function Header (props){
  let { focused }  = props;
  let { setFocusFn } = props;
 
  return (
    <HeaderWraper>
      <Hederimg></Hederimg>
      <Nav></Nav>
      <CSSTransition
        in={focused}
        timeout={1000}
        classNames="fade"
      >
        <HeaderSearch onFocus={setFocusFn.bind(this, true)} onBlur={setFocusFn.bind(this, false)} className="search"></HeaderSearch>
      </CSSTransition>
      
    </HeaderWraper>
  ); 
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFocusFn(flag) {
      console.log(flag)
      const action = actionsCreators.getList(flag)
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);