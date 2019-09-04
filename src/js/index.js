import React from 'react';
import Reactdom from 'react-dom';
import '../sass/main.scss';
import App from './app';

import { store } from './store';

// Necessary for Redux
import { Provider } from 'react-redux';


Reactdom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
