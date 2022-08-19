import React from 'react'
import logoImg from '../../../assets/image/devplus/favicon.png';
import './sliderBar.scss';
import { FiberManualRecord } from '@material-ui/icons'

const SliderBar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed ">
        {/* Brand Logo */}
        <a href="/" className="brand-link ">
          <img src={logoImg} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light ml-2">Devplus</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p style={{ fontSize: "18px" }}>
                    Manage Data
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#banner-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }}> Banner manage</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }} > About Devplus</p>
                    </a>

                  </li>
                  <li className="nav-item">
                    <a href="#category-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }} > Categories</p>
                    </a>

                  </li>
                  <li className="nav-item">
                    <a href="#popular-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }}> Popular</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#cta-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }}> CTA Section</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#concern-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }}> Concerns</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#alumni-modal" className="nav-link">
                      <FiberManualRecord />
                      <p style={{ fontSize: "18px" }}> Alumni Say</p>
                    </a>
                  </li>
                </ul>
              </li>
              <hr />
              <li className='admission' style={{ fontSize: "18px", color: '#fff' }}>More</li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p style={{ fontSize: "18px" }}>
                    ngao luon
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p style={{ fontSize: "14px" }}>lum luon</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p style={{ fontSize: "14px" }}>quat luon</p>
                    </a>
                  </li>

                </ul>
              </li>
              <hr />
              <li className="nav-header">Helo Devplus</li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  )
}

export default SliderBar;
