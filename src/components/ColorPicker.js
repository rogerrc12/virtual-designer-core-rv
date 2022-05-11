import React from 'react';

import Color from './Color';

import classes from './ColorPicker.module.scss';

const colors = ['gloss-white', 'matte-elder-white', 'gloss-med-gray', 'matte-charcoal', 'matte-black', 'gloss-orange', 'matte-red', 'matte-dark-blue'];

const ColorPicker = ({ setColor, color, label }) => {
  const onSelectChange = (e) => setColor(e.target.value);

  return (
    <div className='w-full md:w-2/5 my-4'>
      <div className='flex items-center justify-between w-full'>
        <p className='mr-3 uppercase'>{label}:</p>
        <select
          className={`block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${classes.Select}`}
          onChange={onSelectChange}
          value={color}>
          <option value='gloss-white'>Arctic White Gloss</option>
          <option value='matte-elder-white'>Matte Elder White</option>
          <option value='gloss-med-gray'>Storm Grey Gloss</option>
          <option value='matte-charcoal'>Tundra Night Matte</option>
          <option value='matte-black'>Carbon Black Matte</option>
          <option value='gloss-orange'>Solar Orange Gloss</option>
          <option value='matte-red'>Race Red Matte</option>
          <option value='matte-dark-blue'>Deep Sea Blue Matte</option>
        </select>
      </div>
      <hr className='border-dashed mt-4' />
      <div className='flex items-center justify-between mt-4'>
        {colors.map((color) => (
          <Color key={color} color={color} setColor={setColor} className={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
