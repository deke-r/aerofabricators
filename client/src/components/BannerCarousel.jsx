import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
import '../styles/banner.css';

const BannerCarousel = () => {
  const slides = [
    {
      title: "17 Years Fabrication Excellence",
      subtitle: "We Fabricate Your Industry with Solid Transformation",
      background: bg1,
      align: "text-center",
      buttons: [
        { label: "Contact Now", href: "contact" },
      ],
    },
    {
      title: "World Class Service",
      subtitle: "We Build Your Dream",
      subsubtitle:
        "Get Perfect Fabrication Industry\nA Combination of Fast Blending Metal Fabrication",
      background: bg2,
      align: "text-start", // Left align (Bootstrap 5 correct class)
      buttons: [
        { label: "Contact Now", href: "contact" },
      ],
    },
    {
      title: "Meet Our Super Architect Team",
      subtitle: "No One Better Than Us",
      subsubtitle: "Get Complete Fabrication with Modern Shapes",
      background: bg3,
      align: "text-end", // Right align (fixed)
      buttons: [
        { label: "Get Free Quote", href: "contact", type: "orange" }, // orange button
        { label: "Learn more", href: "about" },
      ],
    },
  ];

  return (
    <Carousel fade interval={4000} className="banner-carousel">
      {slides.map((slide, idx) => (
        <Carousel.Item
          key={idx}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
          }}
        >
          <div className={`slider-content ${slide.align} h-100 d-flex align-items-center`}>
            <Container>
              <Row>
                <Col md={12}>
                  <h2 className="slide-title text-light text-uppercase">{slide.title}</h2>
                  <h3 className="slide-sub-title text-uppercase">{slide.subtitle}</h3>
                  {slide.subsubtitle && (
                    <h4 className="slide-small-subtitle text-light">{slide.subsubtitle}</h4>
                  )}
                  <div className="mt-3">
                    {slide.buttons.map((btn, i) => (
                      <Button
                        key={i}
                        href={btn.href}
                        className={`slider-btn ${btn.type === "orange" ? "btn-orange" : ""} rounded-0 me-2`}
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
