import React, { useState } from 'react';
import logo from '~/assets/image/devplus/favicon.png'

const Header = () => {
  const [onShow, setOnshow] = useState(false)


  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div>
            <img src={logo} alt='' style={{ width: '50px', height: '50px' }} />
            Devplus
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link active text-primary" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Data manage
              </a>
              <ul className="dropdown-menu">
                <li><a href='#banner' className="dropdown-item">Banner</a></li>
                <li><a href='#about' className="dropdown-item">About</a></li>
                <li><a href='#category' className="dropdown-item">Category</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a href='#popular' className="dropdown-item">Popular</a></li>
                <li><a href='#cta' className="dropdown-item">Cta Data</a></li>
                <li><a href='#concern' className="dropdown-item">Concern</a></li>
                <li><a href='#alumni'className="dropdown-item">Alumni say</a></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header