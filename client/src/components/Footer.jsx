import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import logo from '../assets/images/Aero Fabricators Logo.png'

const Footer = () => {
    return (
        <footer className="text-center pt-3 text-lg-start footer text-secondary">
           

            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-light border-left ps-3">
                                About Us
                            </h6>
                            <img src={logo} width={200} loading='lazy' alt='logo' />
                            <p className='mt-4'>
                                Being counted as the well known name of the industry, we are into offering MS Fabrication Work and SS Fabrication and Heavy duty fabrication.
                            </p>
                            <div className="footer-social">
                                <ul>
                                    <li><Link to="https://www.facebook.com/aerofabricators" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="https://twitter.com/aerofabricators" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                                    </li>
                                    <li><Link to="https://www.instagram.com/aerofabricators/" aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="#" aria-label="whatsapp"><i className="fab fa-whatsapp"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-light ps-3 border-left">Services</h6>
                            <p><Link to="/services/ms-fabrications" className="text-decoration-none list-arrow f_13 fw-semibold text-secondary">Mild Steel Fabrication</Link></p>
                            <p><Link to="/services/preengineeringstructure" className="text-decoration-none list-arrow f_13 fw-semibold text-secondary">Pre Engineering Structure</Link></p>
                            <p><Link to="/services/structural-fabrication" className="text-decoration-none list-arrow f_13 fw-semibold text-secondary">Structural Fabrication</Link></p>
                            <p><Link to="/services/ss-fabrication" className="text-decoration-none list-arrow f_13 fw-semibold text-secondary">Stainless Steel Fabrication</Link></p>
                            <p><Link to="/services/sheet-metal-component" className="text-decoration-none list-arrow f_13 fw-semibold text-secondary">Sheet Metal Component</Link></p>
                            <p><Link to="/services/bailey-bridges-manufacturing" className="text-decoration-none f_13 fw-semibold text-secondary list-arrow">Bridges</Link></p>
                        </div>




                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase text-light fw-bold mb-4 border-left ps-3">Contact Information</h6>

                            <div className="mb-3 d-flex align-items-start">
                                <i className="fas fa-map-marker-alt me-3 mt-1"></i>
                                <p className="mb-0 f_13 fw-semibold text-secondary">17, Block A, Sector 4, Noida, Uttar Pradesh 201301</p>
                            </div>

                            <div className="mb-3 d-flex align-items-start">
                                <i className="fas fa-phone me-3 mt-1"></i>
                                <p className="mb-0 f_13 fw-semibold text-secondary">
                                    <a href="tel:+919319412012" className=" text-decoration-none text-secondary">
                                        +91 9319412012
                                    </a>
                                </p>
                            </div>

                            <div className="mb-3 d-flex align-items-start">
                                <i className="fas fa-envelope me-3 mt-1"></i>
                                <p className="mb-0 f_13 fw-semibold text-secondary">
                                    <a href="mailto:info@aerofabricators.in" className=" text-decoration-none text-secondary">
                                        info@aerofabricators.in
                                    </a>
                                </p>
                            </div>

                            <div className="d-flex align-items-start">
                                <i className="fas fa-award me-3 mt-1" style={{ fontSize: "18px", color: "#999" }}></i>
                                <p className="mb-0 f_13 fw-semibold text-secondary">ISO 9001:2017 Certified</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="text-start text-dark fw-semibold f_12 footer-below p-4">
                © {new Date().getFullYear()} Copyright: 2025  Aerofabricators
            </div>
        </footer>
    );
};

export default Footer;
