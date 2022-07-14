import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider>
    <React.StrictMode>
      <Navbar />
      <Searchbar />
      <App />
    </React.StrictMode>
  </IntlProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
