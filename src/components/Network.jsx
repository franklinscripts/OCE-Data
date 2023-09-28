import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Network.css';
import { networkData } from '../data';
import Back from '../assets/svgs/backScroll.svg';
import Front from '../assets/svgs/front.svg';

const Network = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    if (selectedItem === index) {
      // Clicked on the currently selected item, reset it
      setSelectedItem(null);
    } else {
      // Clicked on a different item, select it
      setSelectedItem(index);
    }
  };

  return (
    <div className='n-container'>
      <form>
        <div className="n-header">
          <span>Select network</span>
          <div className="img-div">
            <img src={Back} alt="" />
            <img src={Front} alt="" />
          </div>
        </div>
        <div className="n-select">
          {networkData.map((item, index) => (
            <>
            <div
              className='n-select-container'
              key={item.id}
              onClick={() => handleItemClick(index)}
              style={{
                background: selectedItem === index ? item.color : '#151515',
                
              }}
            >
              <span style={{color: selectedItem === index ? 'black' : '#B1B5C3',}}>{item.provider}</span>
              <img src={item.img} alt={item.provider} />
            </div>
            <div className='box'></div>
            </>

          ))}
        </div>
        <div className="phone-area">
          <span>Phone Number</span>
          <input type="text" placeholder="0906 591 9472" />

        </div>
        

        <button type='submit'>
          Continue <ArrowRightAltIcon />
        </button>
      </form>
    </div>
  );
};

export default Network;
