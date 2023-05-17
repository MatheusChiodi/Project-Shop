import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/contact.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Header from './template/Header.jsx';
import Footer from './template/Footer.jsx';

const router = createBrowserRouter([
  { path: '/Project-Shop/', element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)

