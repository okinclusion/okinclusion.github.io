import React, { useEffect } from 'react';
import './Accessibility.css';

// Function to adjust font size
const adjustFontSize = (delta) => {
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, label, textarea');
  textElements.forEach(element => {
    const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) + delta;
    element.style.fontSize = `${newSize}px`;
  });
};

const Accessibility = () => {
  useEffect(() => {
    const increaseButton = document.getElementById('increase-font');
    const decreaseButton = document.getElementById('decrease-font');

    const increaseHandler = () => adjustFontSize(2);
    const decreaseHandler = () => adjustFontSize(-2);

    increaseButton.addEventListener('click', increaseHandler);
    decreaseButton.addEventListener('click', decreaseHandler);

    // Clean up event listeners on component unmount
    return () => {
      increaseButton.removeEventListener('click', increaseHandler);
      decreaseButton.removeEventListener('click', decreaseHandler);
    };
  }, []);

  return (
    <div>
      <button className='btn1' id="increase-font">+</button>
      <button className='btn2' id="decrease-font">-</button>
    </div>
  );
};

export default Accessibility;
