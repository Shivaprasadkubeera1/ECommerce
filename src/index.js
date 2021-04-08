import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, browserHistory, Switch } from 'react-router';
import One from './components/One';

ReactDOM.render(

  <Router history={browserHistory} >
  <Route path="/" component={App}></Route>
  <Route path="/One" component={One}></Route>
  </Router>

  ,
  
  document.getElementById('root')
);

{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
