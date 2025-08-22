import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppGlobal from './AppGlobal';
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <AppGlobal/>
    </Provider> ,
  // </React.StrictMode>,
  document.getElementById('root')
);