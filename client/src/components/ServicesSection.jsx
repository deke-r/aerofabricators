import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faBuilding,
  faCogs,
  faTools,
  faWrench,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";

import sc from "../assets/images/service-center.png";

const servicesLeft = [
  {
    icon: faIndustry,
    title: "Mild Steel Fabrication",
    link: "https://aerofabricators.in/ms-fabrication",
    description:
      "Aero Fabricators has forayed into Metal Fabrication Services to provide total structural solution",
  },
  {
    icon: faBuilding,
    title: "Pre Engineering Structure",
    link: "https://aerofabricators.in/preengineeringstructure",
    description:
      "We are fully geared to meet any requirements of Pre Engineered Building Structure.",
  },
  {
    icon: faCogs,
    title: "Sheet Metal Component",
    link: "https://aerofabricators.in/sheet-metal-component",
    description:
      "Manufacturing and supplying high-quality Sheet Metal Components for engineering sectors.",
  },
];

const servicesRight = [
  {
    icon: faTools,
    title: "Sheet Metal Fabrication",
    link: "https://aerofabricators.in/structural-fabrication",
    description:
      "Reliable Sheet Metal Fabrication Services with precise execution.",
  },
  {
    icon: faWrench,
    title: "Stainless Steel Fabrication",
    link: "https://aerofabricators.in/ss-fabrication",
    description:
      "Cost-effective and timely SS Fabrication Services admired by customers.",
  },
  {
    icon: faDraftingCompass,
    title: "Structural Fabrication",
    link: "https://aerofabricators.in/structural-fabrication",
    description:
      "Supplying a wide range of high-quality Structural Fabrications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="ts-service-area" className="ts-service-area pb-0 pt-3">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">We Are Specialists In</h2>
            <h3 className="section-sub-title">What We Do</h3>
          </div>
        </div>

        <div className="row align-items-start">
          {/* Left Services */}
          <div className="col-lg-4">
            {servicesLeft.map((service, index) => (
              <div key={index} className="ts-service-box d-flex mb-4 align-items-start">
                <div className="ts-service-box-img me-3 fs-2 txt-o pt-1">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title text-dark">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark f_16 fw-bold"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="f_15 text-muted">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="col-lg-4 text-center my-4 my-lg-0">
            <img
              loading="lazy"
              className="img-fluid"
              src={sc}
              alt="sheet metal fabrication worker"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Right Services */}
          <div className="col-lg-4">
            {servicesRight.map((service, index) => (
              <div key={index} className="ts-service-box d-flex mb-4 align-items-start">
                <div className="ts-service-box-img me-3 fs-2 txt-o pt-1">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark f_16 fw-bold"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="f_15 text-muted fw-semibold">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
