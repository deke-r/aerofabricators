import React from "react";

const AboutUsSection = () => {
    return (
        <section id="ts-features" className="ts-features py-5">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-6">
                        <div className="ts-intro">
                            <h2 className="into-title f_18 text-uppercase">About Us</h2>
                            <h3 className="into-sub-title">Fast Delivery with Perfect Fabrication</h3>
                            <p className="f_14 fw-semibold text-muted">
                                Aero Fabricators emerged as one of the distinguished manufacturers in the
                                fabrication sectors. We are highly experienced suppliers, architects, weldors,
                                and builders in the fabrication field. We provide Mild Steel, M.S, S.S fabrication
                                works, PEB Structural Fabrication, S.S. and M.S. Storage Tanks, Pressure Vessels,
                                and Pipelines etc.
                                <br />
                                Aero Fabricators is one of the important fabrication industries which have
                                excellent technician experts with multiple decades of experience.
                            </p>
                        </div>

                        <div className="gap-20"></div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="ts-service-box d-flex align-items-center">
                                    <span className="ts-service-icon me-3">
                                        <i className="fas fa-trophy f_36 txt-o"></i>
                                    </span>
                                    <span className="service-box-title">
                                        We've Repution for <br /> Excellence
                                    </span>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="ts-service-box d-flex align-items-center">
                                    <span className="ts-service-icon me-3">
                                        <i className="fas fa-sliders-h f_36 txt-o"></i>
                                    </span>
                                    <span className="service-box-title">
                                        We Build <br /> Partnerships
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6 mb-4">
                                <div className="ts-service-box d-flex align-items-center">
                                    <span className="ts-service-icon me-3">
                                        <i className="fas fa-thumbs-up f_36 txt-o"></i>
                                    </span>
                                    <span className="service-box-title">
                                        Guided by <br /> Commitment
                                    </span>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="ts-service-box d-flex align-items-center">
                                    <span className="ts-service-icon me-3">
                                        <i className="fas fa-users f_36 txt-o"></i>
                                    </span>
                                    <span className="service-box-title">
                                        A Team of <br /> Professionals
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h1 className="into-sub-title mt-4">Heavy Steel Fabrication company</h1>
                        <p className="f_14 text-muted fw-semibold">
                            Adding this with the latest technology of a brand, we provide you with a detailed
                            quality coating fabrication. Supported by our highly skilled technical experts and
                            industrial specialists we hold technical combinations in the fabrication development
                            market. Our ambitions and policy guide us to support society with better fabrication
                            solutions using recyclable materials that give you the flexible textures. We make it
                            possible and more secure fabrication by using quality material and components. All
                            together Aero Fabricators being an experienced, modern, ambitious, technique focused
                            manufacturing company with excellent services deliver the best fabrication in a short
                            time period.
                        </p>

                        {/* Accordion */}
                        <div className="accordion" id="accordionExample">
                         

                            <div className="accordion-item my-3 rounded-0 border border-1 bxd">
                                <h2 className="accordion-header">
                                    <button className="accordion-button f_16 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseT"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                      Structure Manufacturing
                                    </button>
                                </h2>
                                <div id="collapseT" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body border-top border-1 f_14 fw-semibold text-muted">
                                    After the blueprint and design of the structure are finalized, all components are manufactured in our advanced workshop using precision machinery.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item my-3 rounded-0  border border-1 bxd">
                                <h2 className="accordion-header">
                                    <button className="accordion-button f_16 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Installation
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body border-top border-1 f_14 fw-semibold text-muted">
                                        Our team ensures all fabricated components are safely delivered and installed at the client's site according to specifications and structural safety standards.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item my-3 rounded-0 border border-1 bxd">
                                <h2 className="accordion-header">
                                    <button className="accordion-button f_16 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        Ongoing Support
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body border-top border-1 f_14 fw-semibold text-muted">
                                        We provide dedicated post-installation support, including maintenance advice and servicing to ensure longevity and reliability of the fabricated structures.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion end */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
