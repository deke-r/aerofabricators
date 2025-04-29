

const ContactInfoSection = () => {
  return (
    <section id="contact-info" className="my-5">
      <div className="container">
        {/* Title and Subtitle */}
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Reaching our Office</h2>
            <h3 className="section-sub-title">Find Our Location</h3>
          </div>
        </div>

        {/* Contact Info Boxes */}
        <div className="row mx-md-5">
          {/* Visit Our Office */}
          <div className="col-md-4 py-2">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fas fa-map-marker-alt mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Visit Our Office</h4>
                <p>17, Block A, Sector 4, Noida, Uttar Pradesh 201301</p>
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div className="col-md-4 py-2 ">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon">
                <i className="fa fa-envelope mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Email Us</h4>
                <p>info@aerofabricators.in</p>
              </div>
            </div>
          </div>

          {/* Call Us */}
          <div className="col-md-4 py-2">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fa fa-phone-square mr-0"></i>
              </span>
              <div className="ts-service-box-content">
                <h4>Call Us</h4>
                <p>+91 9319412012</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
