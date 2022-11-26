import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

// router components
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
