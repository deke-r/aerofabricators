import React from 'react';
import '../styles/ExpertiseSection.css'
import railing from '../assets/images/Railing (1).webp'
import Staircase from '../assets/images/Staircase (1).webp';
import Window from '../assets/images/Window (1).webp';
import door from '../assets/images/Door (1).webp';
import Slidingdoor from '../assets/images/Sliding-Door (1).webp';
import table from '../assets/images/Table (1).webp';
import gate from '../assets/images/Gate (1).webp';
import fur from '../assets/images/Furniture (1).webp';
import Barricading from '../assets/images/Barricading (1).webp';
import Structure from '../assets/images/Structure (1).webp';
import Folding from '../assets/images/Folding (1).webp';
import grill from '../assets/images/Grill (1).webp';
import Rolling from '../assets/images/Rolling Shutter (1).webp'
const expertiseItems = [
  {
    title: 'Railing',
    image: railing,
    desc: 'Mild Steel Railing is a type of railing made of mild steel, which is low-carbon steel with good strength and durability...',
    link: 'mild-steel-railing'
  },
  {
    title: 'Staircase',
    image: Staircase,
    desc: 'Mild Steel Staircases are used in residential, commercial, and industrial spaces...',
    link: 'mild-steel-staircase'
  },
  {
    title: 'Window',
    image: Window,
    desc: 'Upgrade your windows with our high-quality Mild Steel frames...',
    link: 'mild-steel-window'
  },
  {
    title: 'Door',
    image: door,
    desc: 'High your home\'s security and style with our premium Mild Steel doors...',
    link: 'mild-steel-door'
  },
  {
    title: 'Sliding Door',
    image: Slidingdoor,
    desc: 'Upgrade your space with our sleek Mild Steel sliding doors...',
    link: 'mild-steel-sliding-door'
  },
  {
    title: 'Table',
    image: table,
    desc: 'Upgrade your workspace with the versatile MS Table...',
    link: 'mild-steel-table'
  },
  {
    title: 'Gate',
    image: gate,
    desc: 'You can enhance security and convenience with the MS Gate...',
    link: 'mild-steel-gate'
  },
  {
    title: 'Furniture',
    image: fur,
    desc: 'You can transform your space with MS furniture...',
    link: 'mild-steel-furniture'
  },
  {
    title: 'Barricading',
    image: Barricading,
    desc: 'You can ensure safety and control with MS barricading solutions...',
    link: 'mild-steel-barricading'
  },
  {
    title: 'Structure',
    image: Structure,
    desc: 'Build your vision with MS structure solutions...',
    link: 'mild-steel-structure'
  },
  {
    title: 'Folding',
    image: Folding,
    desc: 'You can experience convenience and versatility with MS folding solutions...',
    link: 'mild-steel-foliding'
  },
  {
    title: 'Grill',
    image: grill,
    desc: 'You can experience flavor like never before with MS Grill...',
    link: 'mild-steel-grill'
  },
  {
    title: 'Rolling Shutter',
    image: Rolling,
    desc: 'Mild Steel Rolling Shutters are strong and weather-resistant...',
    link: 'mild-steel-rolling-shutter'
  }
];

const ExpertiseCard = ({ title, image, desc, link }) => (
    <div className="col-md-4 mt-3">
      <div className="box">
        <img src={image} alt={title} className="expertise-img" />
        <div className="overlay">
          <h1><span style={{ fontWeight: 300 }}>MS </span>{title}</h1>
          <p>{desc.length > 100 ? desc.slice(0, 100) + '...' : desc}</p>
          <a href={link} className="btn">More Info</a>
        </div>
      </div>
    </div>
  );
  
  

const ExpertiseSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4">
          <h3 className='fw-bold border-left ps-3'>OUR EXPERTISE</h3>
        </div>
        {expertiseItems.map((item, idx) => (
          <ExpertiseCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
