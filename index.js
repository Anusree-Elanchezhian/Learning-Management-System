import { Provider } from 'react-redux';
import store from './components/redux/Store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Replace this with the root component of your application

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
