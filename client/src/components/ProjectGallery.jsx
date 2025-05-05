import React, { useState } from "react";
import img1 from "../assets/images/k4tpjnasfij16rks2fv7.webp";
import img2 from "../assets/images/evblyo3tjsrk1xr8ikkw.webp";
import img3 from "../assets/images/kyhpw0jrasxvvkf6vdr8.webp";
import img4 from "../assets/images/ovvgauhux0958tzecpru.webp";
import img5 from "../assets/images/b62otwha6qod7ofruwnw.webp";
import img6 from "../assets/images/jgvad6kjambi8wcaokxz.webp";
import '../styles/ProjectGallery.css';

const projects = [
  {
    title: "Capital Teltway Building",
    image: img4,
    categories: ["government", "healthcare"],
    categoryLabel: "Commercial, Interiors",
  },
  {
    title: "Ghum Touch Hospital",
    image: img6,
    categories: ["healthcare"],
    categoryLabel: "Healthcare",
  },
  {
    title: "TNT East Facility",
    image: img1,
    categories: ["infrastructure", "commercial"],
    categoryLabel: "Government",
  },
  {
    title: "Narriot Headquarters",
    image: img2,
    categories: ["education", "infrastructure"],
    categoryLabel: "Infrastructure",
  },
  {
    title: "Kalas Metrorail",
    image: img3,
    categories: ["infrastructure", "education"],
    categoryLabel: "Infrastructure",
  },
  {
    title: "Ancraft Avenue House",
    image: img5,
    categories: ["residential"],
    categoryLabel: "Residential",
  },
];

const filters = [
  { label: "Show All", value: "all" },
  { label: "Mild steel fabrication", value: "commercial" },
  { label: "Pre engineering structure", value: "education" },
  { label: "Structural fabrication", value: "government" },
  { label: "Stainless steel fabrication", value: "infrastructure" },
  { label: "Sheet metal component", value: "residential" },
  { label: "Sheet metal fabrication", value: "healthcare" },
];

const ProjectGallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section id="project-area" className="project-area solid-bg py-5">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-lg-12">
            <h2 className="section-title">Work of Excellence</h2>
            <h3 className="section-sub-title">Recent Projects</h3>
          </div>
        </div>

        {/* Styled Nav-tabs as Button Filter Group */}
        <ul className="nav nav-tabs justify-content-center flex-wrap custom-tabs mb-4" role="tablist">
          {filters.map((f) => (
            <li className="nav-item" key={f.value}>
              <button
                className={`nav-link ${filter === f.value ? "active" : ""}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <div className="card border-0 shadow project-card position-relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top project-img"
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center project-overlay">
                  <div className="text-center text-white">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.categoryLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
};

export default ProjectGallery;
