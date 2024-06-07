import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({onClick, className}) {
  return (
    <span onClick={onClick}>
    <FaStar className={className} />
    </span>
  );
}

export default Star;