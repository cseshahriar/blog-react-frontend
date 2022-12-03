import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, BrowserRouter} from "react-router-dom";
import  {CookiesProvider} from 'react-cookie';

import Login from "./components/Login.component";

import './index.css';
import App from './App';

function Router() {
    return(
        <Routes>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/articles" component = {App}/>
        </Routes>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
);
