import React from 'react';

// Importing images for the carousel
import slide1 from '../assets/images/upcwe3c5iuzfvig6omcz.webp';
import slide2 from '../assets/images/jk14ci2xvgdsxkoip7rb.webp';
import slide3 from '../assets/images/w718ixejt7nbuwmrcc0g.webp';

const WhoWeAreSection = () => {
  return (
    <section id="main-container" className="main-container">
      <div className="container my-5">
        <div className="row">
          {/* Left Column - Text Content */}
          <div className="col-lg-6">
            <h3 className="column-title f_20 fw-bold">Who We Are</h3>
            <p className="text-muted f_15">
              Aero Fabricators is the no1 modern fabrication and manufacturing
              industry with more than 25 years of experience in the fabrication
              sector. It fabricates machinery tools, plants, metals, minerals,
              oil, gas, etc. We also provide our services in technology
              structures, pipe racks, plant building structures, chimneys,
              ducting, cladding, etc. Generally, fabrication is a process of
              cutting, bending, and welding machinery tools to make fine shapes,
              designs, and structures. In fabrication, raw materials are
              strengthened or repaired.
            </p>
            <p className="text-muted f_15 bg-light p-3" style={{ borderLeft: '2px solid #FD6500' }}>
              <blockquote>
                <i>
                  Having our high profile working experience, we emerged as the
                  best fabrication service providers in construction and building
                  fabrication in multiple fields such as Mild steel, PEB, M.S.,
                  S.S. fabrication work, Structural Fabrication, Storage Tanks,
                  Pipelines, Pressure Vessels, etc. We are a more trusted company
                  with the finest quality material production. We designed with
                  highly developed technology to increase our productivity. We grew
                  with our rapid performing capabilities, and in a very short time,
                  we received widespread customer interest.
                </i>
              </blockquote>
            </p>
            <p className="text-muted f_15">
              We uniquely fabricate things to form metal into different sizes
              and shapes. We have more skilled and experienced technicians who
              can transform raw materials into good marketing products. Aero
              Fabricators has been working in this industry for more than 25 years
              of experience. We are known for our work, sincerity, and performance.
            </p>
          </div>

          {/* Right Column - Bootstrap Carousel */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div
              id="page-slider"
              className="carousel slide"
              data-bs-ride="carousel"
             
            >
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: `url(${slide1})`, backgroundSize: 'cover', height: '400px' }}
                >
                  <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="box-slider-content text-center"  style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
                borderRadius: '0px', // Optional rounded corners
                padding: '10px', // Add padding around carousel content
              }}>
                      <h2 className="box-slide-title text-white fw-bold f_18">Leadership</h2>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div
                  className="carousel-item"
                  style={{ backgroundImage: `url(${slide2})`, backgroundSize: 'cover', height: '400px' }}
                >
                  <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="box-slider-content text-center" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
                borderRadius: '0px', // Optional rounded corners
                padding: '10px', // Add padding around carousel content
              }}>
                      <h2 className="box-slide-title text-white fw-bold f_18">Relationships</h2>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div
                  className="carousel-item"
                  style={{ backgroundImage: `url(${slide3})`, backgroundSize: 'cover', height: '400px' }}
                >
                  <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="box-slider-content text-center" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
                borderRadius: '0px', // Optional rounded corners
                padding: '10px', // Add padding around carousel content
              }}>
                      <h2 className="box-slide-title text-white fw-bold f_18">Performance</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#page-slider"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#page-slider"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
