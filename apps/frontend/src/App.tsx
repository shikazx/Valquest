import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-auto bg-[#111823]">
        <Navbar />
        <main className="flex-grow">
          <Outlet /> {/* This is where AgentsPage, MapsPage, etc. will show up */}
        </main>
      </div>
    </>
  )
}

export default App
