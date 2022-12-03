import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, BrowserRouter} from "react-router-dom";
import  {CookiesProvider} from 'react-cookie';

import Login from "./components/Login.component";

import './index.css';
import App from './App';

function Router() {
    return(
        <CookiesProvider>
            <BrowserRouter>
                <Route exact path = "/" component = {Login}/>
                <Route exact path = "/articles" component = {App}/>
            </BrowserRouter>
        </CookiesProvider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
