import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style.js';
import '@/statics/icon-font/iconfont.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '@/store';
import { Provider } from 'react-redux';
import "lib-flexible"
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store={store}>
    <App />
    <Globalstyle /> 
  </Provider>,
document.getElementById('root'));
// document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth) /10 + 'px';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
