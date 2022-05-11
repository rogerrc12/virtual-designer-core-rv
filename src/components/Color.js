import React from 'react';

import classes from './Color.module.scss';

const Color = ({ className, setColor, color }) => {
  return (
    <button onClick={() => setColor(color)}>
      <div className={`${classes.Color} ${className}`} />
    </button>
  );
};

export default Color;
