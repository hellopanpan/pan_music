import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {routes} from './router/index'
import Player from '@/views/player'
import './index.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
      <Player></Player>
    </div>
  );
}

export default App;
