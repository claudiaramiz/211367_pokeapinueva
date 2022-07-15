import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import About from './components/About';
import Home from './Home'

import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path='/' element={<App></App>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
