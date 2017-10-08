import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router.jsx';
import storeConfigure from './store.config';

import Style from '../public/style.css';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
