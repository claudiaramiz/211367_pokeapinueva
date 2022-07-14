import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';


import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <Searchbar />
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
