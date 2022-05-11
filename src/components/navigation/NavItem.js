import React from 'react';

const NavItem = ({ link, children }) => {
  return (
    <li className='nav-item'>
      <a href={link}>{children}</a>
    </li>
  );
};

export default NavItem;
