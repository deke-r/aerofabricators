import React from "react";


const SubscribeSection = ({ phoneTitle, phoneNumber, emailTitle, email }) => {
  return (
    <section className="subscribe no-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="div ps-5 py-4">
              <h3 className="f_18 fw-bold">{phoneTitle}</h3>
              <h4 className="f_24 fw-bolder text-light">{phoneNumber}</h4>
            </div>
          </div>

          <div className="col-md-6 ts-newsletter">
            <div className=" row d-flex justify-content-center">
              <div className="div ps-5 py-4">
                <h4 className="text-white mb-0 f_18 fw-bold">{emailTitle}</h4>
                <p className="text-white">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
