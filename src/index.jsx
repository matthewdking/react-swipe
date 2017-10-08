import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router.jsx';

import Style from '../public/style.css';

ReactDOM.render(
  <Provider>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
