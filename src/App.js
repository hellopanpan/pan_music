import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {routes} from './router/index'
import Player from '@/views/player'
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css'
function App() {
  return (
    <div className="App">
      <div className="app-wrap">
      <Scrollbars>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Scrollbars>
        
      </div>
      <Player></Player>
    </div>
  );
}

export default App;
