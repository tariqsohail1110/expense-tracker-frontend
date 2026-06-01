import { useState } from 'react'
import { Sidebar, Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
