import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

import App from './App';

window.onload = () => {
  'use strict';

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

};
