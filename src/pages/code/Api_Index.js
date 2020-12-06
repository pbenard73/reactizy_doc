export default `/* src/index.js*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Store, domainize } from 'reactizy'
import mainApi from './api/main'
import extApi from './api/ext'

import main from './reduxers/main'

ReactDOM.render(
  <React.StrictMode>
    <Store reduxers={[main]} apis={[mainApi, domainize('https://myDomain.com', extApi)]}>
        <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)`

