import React from 'react'
import Menuemodel from './models/Menuemodel'

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <a href="#" className="logo">Roshan Sharma</a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#skill">Skills</a></li>
        <li className="nav-item"><a href="#project">Projects</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
      {/* <div className="admin"><a href="#admin">Admin</a></div> */}
      <Menuemodel />

    </nav>
  )
}


export default Navbar