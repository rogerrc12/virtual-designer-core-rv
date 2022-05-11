import React from 'react';

import classes from './ColorPicker.module.scss';

const SlashStyle = () => {
  return (
    <div className='flex items-center px-10 py-6 bg-gray-600 mt-12'>
      <p className='uppercase text-black-500'>Slash style:</p>
      <select
        className={`block appearance-none ml-10 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${classes.Select}`}>
        <option value=''>None</option>
        <option value=''>Basic</option>
        <option value=''>Michigan</option>
        <option value=''>Galagan</option>
        <option value=''>MikaD</option>
        <option value=''>Tribal</option>
        <option value=''>Straight</option>
        <option value=''>NEO</option>
        <option value=''>Maple Leaf</option>
        <option value=''>Arch</option>
        <option value=''>TAB</option>
        <option value=''>JD</option>
      </select>
    </div>
  );
};

export default SlashStyle;
