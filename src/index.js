import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/style.scss';
import ReactGA from 'react-ga4';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize('G-K3YXGGYB7E');
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});
