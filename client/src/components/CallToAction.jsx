import { Link } from 'react-router-dom';

const CallToAction = ({ message, buttonLabel, buttonLink }) => {
  return (
    <section className="position-relative py-4">
      <div className="container call-to-action-box">
        <div className="row mx-5">
          <div className="container">
            <div className="bg-o py-4 px-3">
              <div className="row align-items-center">
                <div className="col-md-8 text-start text-md-left">
                  <h3 className="text-white mb-0 f_16 fw-bold ms-md-5">{message}</h3>
                </div>
                <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                  <Link to={buttonLink} className="btn btn-dark f_16 fw-bold">
                    {buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
