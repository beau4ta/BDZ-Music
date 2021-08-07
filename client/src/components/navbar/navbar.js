import React from 'react';
import Logo from '../animation/logo';
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
        <li className='link'><a id="len1" class="hoverable" href="/">Home</a></li>
        <li className='link'><a id="len2" class="hoverable" href="/about">About</a></li>
        <li className='link'><a id="len3" class="hoverable" href="/music">Music</a></li>
        <li className='link'><a id="len4" class="hoverable" href="/merch">Merch</a></li>
        <li className='link'><a id="len4" class="hoverable" href="/shows">Shows</a></li>
        <li className='link'><a id="len4" class="hoverable" href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Navbar;