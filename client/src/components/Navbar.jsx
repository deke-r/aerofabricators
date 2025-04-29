import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Aero Fabricators Logo.png';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt='aero fab' loading='lazy' width={121} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle f_14 text-light" style={{ fontWeight: 700, textTransform: 'uppercase' }} role="button">
                Services
              </span>
              <ul className="dropdown-menu shadow-sm">
                <li className="px-2">
                  <Link className="dropdown-item" to="/services/ms-fabrications">
                    Mild Steel Fabrication
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/preengineeringstructure">
                    Pre Engineering Structure
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/structural-fabrication">
                    Structural Fabrication
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/ss-fabrication">
                    Stainless Steel Fabrication
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/sheet-metal-component">
                    Sheet Metal Component
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/sheet-metal-fabrication">
                    Sheet Metal Fabrication
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/bailey-bridges-manufacturing">
                    Bridges Manufacture
                  </Link>
                </li>
                <hr className="mx-3 my-2" />

                <li className="px-2">
                  <Link className="dropdown-item" to="/services/canopy-manufacturers">
                    Canopy
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={import.meta.env.VITE_ABOUTUS_PAGE}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={import.meta.env.VITE_CONTACT_PAGE}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
