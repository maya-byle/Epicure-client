import React from 'react';
import './Header.scss'; 
import hamburger from '../../Assets/svg/hamburger.svg'
import logo from '../../Assets/png/logo.png'
import magnifying_glass from '../../Assets/svg/magnifying_glass.svg'
import icon from '../../Assets/svg/icon.svg'
import shopping_bag from '../../Assets/svg/shopping_bag.svg'

const Header = () => {
  return (
    <div>
      <header className="header">

        <img className='mobile_menu_button' src={hamburger} alt='mobile menu'/>

        <img className='logo' src={logo} alt='logo'/>

        <div className='links_container'>
          <a className='big_desktop'>EPICURE</a>
          <a className='sml_desktop'>Restaurants</a>
          <a className='sml_desktop'>Chefs</a>
        </div>
        {/* TODO: fix links location in desktop */}

        <div className='right_header'>
          <img className='icon' src={magnifying_glass} alt='search'/>
          <img className='icon' src={icon} alt='icon'/>
          <img className='icon' src={shopping_bag} alt='shopping bag'/>
        </div>

        {/* TODO: add search field (for mobile: when search icon is clicked) */}

      </header>
    </div>
  );
};

export default Header;
