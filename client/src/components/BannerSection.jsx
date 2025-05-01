import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = ({ backgroundImage, page,page2 }) => {
  return (
    <div
      id="banner-area"
      className="banner-area d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: 300,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% black overlay
          zIndex: 1
        }}
      ></div>

      {/* Content */}
      <div className="banner-text" style={{ zIndex: 2 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading text-center">
                <h1 className="banner-title text-light">{page}</h1>
                <h5 className="text-light">
                  <Link to="/">Home</Link>{page2?`/ ${page2}`:''} / {page}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
