import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { ProductsPage } from './pages/products/ProductsPage.jsx'
import { Registro } from './pages/Registro/Registro.jsx'
import { NotFoundPage } from './pages/NotFound/NotFoundPage.jsx'
import { Dashboard } from './pages/dashboard/Dashboard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/productos' element={<ProductsPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
)
