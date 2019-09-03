import React from 'react';
import Reactdom from 'react-dom';
import '../sass/main.scss';
import App from './app';
import { createStore } from 'redux'

Reactdom.render(<App />, document.getElementById('root'));
