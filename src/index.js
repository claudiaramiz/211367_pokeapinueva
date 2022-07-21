import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import About from './components/About';
import Home from './Home'
import Footer from './components/Footer';
import NavbarInferior from "./components/NavbarInferior";
import ThemeContext from './Context/ContextoGeneral'

import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <NavbarInferior />
          <Searchbar />
          <Routes>
            <Route path='/' element={<App></App>}></Route>
            <Route path='/Pokemon' element={<Home></Home>}></Route>
            <Route path='/211367' element={<About></About>}></Route>
          </Routes>
          <Footer />
        </I18nextProvider>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);
