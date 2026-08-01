import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthLayout from './AuthLayout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'
import Budgets from './pages/Budgets.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Otp from './pages/Otp.jsx'
import Account from './pages/Account.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/app' element={<App/>}>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='transactions' element={<Transactions/>}></Route>
        <Route path='budget' element={<Budgets/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='myaccount' element={<Account/>}></Route>
      </Route>
      <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='otp' element={<Otp/>}></Route>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
