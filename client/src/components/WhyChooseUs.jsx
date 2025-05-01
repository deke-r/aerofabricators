import React from 'react';
import '../styles/WhyChooseUs.css'; 
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';

const cardData = [
  {
    title: 'Strong Welding',
    img: one,
    alt: 'Strong Welding',
  },
  {
    title: 'Metal Quality',
    img: two,
    alt: 'Metal Quality',
  },
  {
    title: 'On Time Target',
    img: three,
    alt: 'On Time Target',
  },
  {
    title: 'Affordable Price',
    img: four,
    alt: 'Affordable Price',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-heading">
          <h3 className=''><strong>WHY CHOOSE US</strong></h3>
        </div>
        <div className="why-choose-us-cards">
          {cardData.map((card, index) => (
            <div className="why-choose-us-card" key={index}>
              <div className="why-choose-us-card-inner">
                <img src={card.img} className="why-choose-us-img" alt={card.alt} />
                <div className="why-choose-us-body">
                  <h3 className="why-choose-us-title">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
