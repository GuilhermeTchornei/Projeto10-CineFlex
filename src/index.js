import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reset from './Reset';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
