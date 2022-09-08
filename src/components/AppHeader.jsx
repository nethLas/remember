import React from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function AppHeader() {

  const navigate = useNavigate()
  return (
    <header className="flex space-between align-center header-container">
      <section onClick={() => navigate('/')} className="header-logo">
        <span>Remember Them</span>
      </section>
      <nav className='flex'>
        <NavLink className="nav-link" to="/">
          Stories
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Sign-up
        </NavLink>
      </nav>
    </header>
  )
}

export default AppHeader
