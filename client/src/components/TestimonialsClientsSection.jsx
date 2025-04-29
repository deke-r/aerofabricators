
import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';
import client3 from '../assets/images/client3.jpg';
import client4 from '../assets/images/client4.jpg';
import client5 from '../assets/images/client5.jpg';
import client6 from '../assets/images/client6.jpg';

const clients = [client1, client2, client3, client4, client5, client6];


const TestimonialsClientsSection = () => {

    return (
        <section className="content py-5">
            <div className="container">
                <div className="row">
                    {/* Testimonials */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h3 className="mb-4">Testimonials</h3>
                        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="quote-item bg-light p-4 rounded border-start border-4 border-warning">
                                        <p className="fst-italic">
                                            Aerofabricators provided top-notch heavy fabrication services. Their skilled work, on-time delivery, and quality exceeded expectations. A trustworthy choice for all fabrication needs.
                                        </p>
                                        <div className="fw-bold mt-3">— Ravi Gupta</div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="quote-item bg-light p-4 rounded border-start border-4 border-warning">
                                        <p className="fst-italic">
                                            Aerofabricators excelled in heavy steel fabrication. Their expertise ensured precise, timely, and quality work. A reliable source for all heavy steel fabrication requirements.
                                        </p>
                                        <div className="fw-bold mt-3">— Anil Joshi</div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="quote-item bg-light p-4 rounded border-start border-4 border-warning">
                                        <p className="fst-italic">
                                            Aerofabricators nailed heavy steel fabrication. Timely, precise, and high-quality work. Count on them for your heavy steel needs.
                                        </p>
                                        <div className="fw-bold mt-3">— Nisha Verma</div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-indicators mt-3">
                                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
                                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
                            </div>
                        </div>
                    </div>

                    {/* Happy Clients */}
                    <div className="col-lg-6">
                        <h3 className="mb-4">Happy Clients</h3>
                        <div className="row g-3">
  {clients.map((item, i) => (
    <div className="col-6 col-sm-4" key={i}>
      <div className="client-card p-3 bg-white rounded shadow-sm text-center d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
        <img
          src={item}
          alt={`Client ${i + 1}`}
          className="img-fluid"
          style={{ maxHeight: '60px', objectFit: 'contain' }}
          loading="lazy"
        />
      </div>
    </div>
  ))}
</div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsClientsSection;
