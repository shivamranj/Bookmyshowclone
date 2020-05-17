import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Triangle from './Triangle'
import vertices from './Triangle'

ReactDOM.render(

  <React.StrictMode>
    {/* <svg width="60" height="60">
<Triangle vertices={vertices} color="#FF1F58"/>
</svg>, */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
