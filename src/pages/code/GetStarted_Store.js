export default `/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Store } from 'reactizy'
import mainApi from './api/main'
import login from './reduxers/login'
import receipe from './reduxers/receipe'

ReactDOM.render(
  <React.StrictMode>
    <Store reduxers={[login, receipe]} apis={[mainApi]}>
       <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)`
