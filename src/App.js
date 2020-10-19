import React from 'react';
import { HashRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {routes} from './router/index'
import Player from '@/views/player'

import { connect } from 'react-redux'
import { Spin } from 'antd';
import './index.css'
function App(props) {
  
  const {loading} = props;

  return (
    <div className="App">
      { loading? <Spin className="loading-icon" size="large"></Spin>: null }
      <div className="app-wrap">  
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </div>
      <div className="player-wrap-all">
        <Player></Player>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['player', 'loading']),
  };
};

export default connect(mapStateToProps, null)(App);
