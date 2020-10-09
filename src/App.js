import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {routes} from './router/index'
import Player from '@/views/player'
import Header from '@/views/header'
import './index.css'
function App() {
  return (
    <div className="App">
      <div className="app-wrap">
        <Header></Header>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
      <div className="player-wrap-all">
        <Player></Player>
      </div>
    </div>
  );
}

export default App;
