import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SideBar from './components/SideBar/SideBar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
  <SideBar />
</React.StrictMode>,
document.getElementById('side-bar')

);


