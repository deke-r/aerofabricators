import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaFlask, FaCertificate, FaCogs } from "react-icons/fa";


const factsData = [
  {
    icon: <FaUsers size={50} color="#FD6500" />,
    count: 1789,
    title: "Dedicated Team",
  },
  {
    icon: <FaFlask size={50} color="#FD6500" />,
    count: 647,
    title: "Molecular Research",
  },
  {
    icon: <FaCertificate size={50} color="#FD6500" />,
    count: 4000,
    title: "Quality Assurance",
  },
  {
    icon: <FaCogs size={50} color="#FD6500" />,
    count: 44,
    title: "Updated Standards",
  },
];

const FactsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="facts" className="facts-area dark-bg py-5">
      <div className="container">
        <div className="facts-wrapper">
          <div className="row" ref={ref}>
            {factsData.map((fact, index) => (
              <div key={index} className="col-md-3 col-sm-6 ts-facts mb-5 mb-md-0 text-center">
                <div className="ts-facts-img mb-3">
                  {fact.icon}
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num text-white">
                    {inView && (
                      <CountUp
                        start={0}
                        end={fact.count}
                        duration={2}
                        delay={0}
                      />
                    )}
                  </h2>
                  <h3 className="ts-facts-title  mt-2">{fact.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
