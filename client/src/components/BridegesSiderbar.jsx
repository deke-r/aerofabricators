import React from 'react';
import { Link } from 'react-router-dom';

const BridegesSiderbar = ({
  title,
  description,
  imageSrc,
  imageAlt,
  subtitle,
  secondaryDescription
}) => {
  return (
    <section id="main-container" className="main-container py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 col-lg-4 mb-4 mb-lg-0">
            <div className="sidebar sidebar-left">
              <div className="widget">
                <h3 className="text-uppercase fw-bold mb-4 f_15 text-dark border-left ps-3">Solutions</h3>
                <ul className="nav flex-column service-menu">
  <Link className="text-dark" to="/services/bailey-bridges-manufacturing">
    <li className="bg-light my-2 py-2 text-center">Bailey Bridges</li>
  </Link>
  <Link className="text-dark" to="/services/bailey-bridges-manufacturing/truss-bridges-manufacturer">
    <li className="bg-light my-2 py-2 text-center">Truss Bridges</li>
  </Link>
  <Link className="text-dark" to="/services/bailey-bridges-manufacturing/grider-bridges-manufacturing">
    <li className="bg-light my-2 py-2 text-center">Grider Bridges Amp Bug</li>
  </Link>
  <Link className="text-dark" to="/services/bailey-bridges-manufacturing/footover-bridges-manufacturer">
    <li className="bg-light my-2 py-2 text-center">Footover Bridges</li>
  </Link>
</ul>

              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-8 col-lg-8">
            <div className="content-inner-page">
              <h2 className="column-title mrt-0 f_15 fw-bold">{title}</h2>
              
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-muted" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </div>

              {imageSrc && (
                <div className="my-4">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt || 'Service Image'} 
                    className="img-fluid"
                  />
                </div>
              )}

              {secondaryDescription && (
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="column-title-small f_15 fw-bold">{subtitle}</h3>
                    <p className="text-muted mt-4" dangerouslySetInnerHTML={{ __html: secondaryDescription }} />
                  </div>
                </div>
              )}

              <div className="my-5 call-to-action bg-b p-4 rounded-0">
                <div className="row align-items-center">
                  <div className="col-md-8 text-center text-md-start">
                    <h3 className="action-title mb-0 f_18 fw-bold">Interested with this service.</h3>
                  </div>
                  <div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
                    <Link className="btn bg-o text-light f_18 fw-bold" to="/contact">Get a Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridegesSiderbar;
