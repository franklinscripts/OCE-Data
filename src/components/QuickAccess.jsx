import React, { useState } from 'react';
import { imgData } from '../data';
import Flash from '../assets/svgs/flash.svg';
import './QuickAccess.css';

const QuickAccess = () => {
  const [on, setOn] = useState(0);

  const handleOn = (index) => {
    setOn(index);
  };

  return (
    <div className='q-main'>
      <div className="header">
        <img src={Flash} alt="img" />
        <span>Quick Access</span>
      </div>
      <div className="q-map">
        {imgData.map((item, index) => (
          <div
            className="q-container"
            key={item.id}
            style={{
              backgroundColor: on === index ? '#062437' : '#151515',
            }}
            onClick={() => handleOn(index)}
          >
            <img src={item.img} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
