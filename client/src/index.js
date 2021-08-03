import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import AppGlobal from './AppGlobal';

axios.defaults.baseURL = "http://localhost:3001" || "/";
ReactDOM.render(
  <React.StrictMode>
    <AppGlobal />
  </React.StrictMode>,
  document.getElementById('root')
);