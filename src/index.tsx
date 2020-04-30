import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookQuery from './bookQuery';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer  from './redux/reducer/bookQuery';
import ViewWord from './viewWord/index'

let store = createStore(reducer);
ReactDOM.render(
  <ViewWord>
    <BookQuery />
  </ViewWord>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
