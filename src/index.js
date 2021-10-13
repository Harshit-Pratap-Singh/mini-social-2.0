import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider> ,
  document.getElementById('root')
);


