import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'
import Budgets from './pages/Budgets.jsx'
import Analytics from './pages/Analytics.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/transactions' element={<Transactions/>}></Route>
      <Route path='/budget' element={<Budgets/>}></Route>
      <Route path='/analytics' element={<Analytics/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
