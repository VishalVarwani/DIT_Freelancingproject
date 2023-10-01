import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './component/footer';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import About from './component/about';
import ScrollToTop from './component/ScrollToTop';
import Angular from './component/courses/angular';
import Cloud from './component/courses/cloud';
import Demo from './demo';
import H from './component/h';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    {/* <Header/> */}
    {/* <Cloud/> */}
    {/* <About/> */}
    <App />
    {/* <H/> */}
    {/* <Demo/> */}
    
    {/* <Footer/> */}
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
