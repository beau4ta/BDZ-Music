import React from 'react';
import Logo from '../animation/logo';
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='nav-container d-flex justify-content-center align-items-center'>
           <nav class="navbar navbar-inverse d-flex justify-content-center align-items-center">
               <div className='d-flex flex-column'><Logo />
               <h1 className='title'>BDZ Music</h1>
               </div>
    <div class="container-fluid d-flex justify-content-center">
      <ul class="nav navbar-nav d-flex flex-row">
        <li className='link'><Link id="len1" class="hoverable" to="/">Home</Link></li>
        <li className='link'><Link id="len2" class="hoverable" to="/about">About</Link></li>
        <li className='link'><Link id="len3" class="hoverable" to="/music">Music</Link></li>
        <li className='link'><Link id="len4" class="hoverable" to="/merch">Merch</Link></li>
        <li className='link'><Link id="len4" class="hoverable" to="/shows">Shows</Link></li>
        <li className='link'><Link id="len4" class="hoverable" to="/videos">Videos</Link></li>
        <li className='link'><Link id="len4" class="hoverable" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Navbar;