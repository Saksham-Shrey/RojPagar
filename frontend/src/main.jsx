import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx';
import './index.css';
import Layout from './components/layout.jsx';
import Home from './components/landingPage/landingHome.jsx';
import AboutUs from './components/landingPage/landingAbout.jsx';
import Contacts from './components/landingPage/landingContact.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/loginSignup/loginPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
