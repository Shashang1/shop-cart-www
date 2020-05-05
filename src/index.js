import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/custom_container.css'
import './assets/css/custom_header.css'
import Home from './components/home';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
