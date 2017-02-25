import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import style from './style/main';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
)

ReactDOM.render(router, document.getElementById('application'));
