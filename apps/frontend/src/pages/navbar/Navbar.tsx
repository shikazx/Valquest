import { useState } from 'react'
import './Navbar.css'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <nav className="h-20 w-full border-b-1 border-gray-400 self-center px-150 flex gap-6 justify-between bg-[#ba3a46]">
        <div className="flex text-center self-center gap-10">
          <Link to="/">
            <Button className="!bg-blue-900 text-red-600" size="lg">Valquest </Button>
          </Link>

           <div className="flex text-center self-center gap-6">
            
            <Link to="/agents">Agents</Link>
            <Link to="/maps">Maps</Link>
            <Link to="/leaderboard">Leaderboard</Link>
           </div>
        </div>
        <div className="flex text-center self-center gap-6">
          <Link to="/login">
            <Button className="!bg-blue-900 text-white" size="lg">Login </Button>
          </Link>
          <Link to="/signup">
            <Button className="!bg-red-700 text-white" size="lg">Sign Up </Button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
