import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import PublicRoutes from './utils/PublicRoutes'
import './App.css'

function App() {

  return (
    <>
    
      <BrowserRouter>
        <div className="min-h-screen w-full flex flex-col bg-auto bg-[#111823]">
          <Routes>
            <Route element={<Navbar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about"/>
            </Route>

            <Route element={<PublicRoutes/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
