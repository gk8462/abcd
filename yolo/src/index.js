/**
 * @description Main React server startup file.
 *
 * @changelog: 
 *  - Version: 0.0.1
 *      Basic working version.
 *  - Version: 0.1.0
 *      Stable verison.
 *  - Version: 0.1.2
 *      Search Functionality
 *  - Version: 0.2.2
 *      Search Functionality issues fixed.
 *      Redux store Functionality fixed.
 *      Search over combination rules.
 *      Fixed Header problems navigations props.
 *      Documentation for every module.
 * 
 * @todo Fix more bugs
 * @todo Use PropTypes for each component to accept and lint props.
 * @description Main server startup script.
 * @author Jithin Zacharia
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
