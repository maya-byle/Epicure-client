import React from 'react';
import './Header.scss'; 
import hamburger from '../../Assets/svg/hamburger.svg'
import logo from '../../Assets/png/logo.png'
import magnifying_glass from '../../Assets/svg/magnifying_glass.svg'
import icon from '../../Assets/svg/icon.svg'
import shopping_bag from '../../Assets/svg/shopping_bag.svg'

const Header = () => {
  const headerLinks: {key:number, className:string, text:string}[] = [
    {key:1 ,className:'big_desktop' ,text:'EPICURE'},
    {key:2 ,className:'sml_desktop' ,text:'Restaurants'},
    {key:3 ,className:'sml_desktop' ,text:'Chefs'}
  ];

  return (
    <div>
      <header className="header">

        <img className='mobile_menu_button' src={hamburger} alt='mobile menu'/>

        <img className='logo' src={logo} alt='logo'/>

        <div className='links_container'>
          {headerLinks.map((link) => (
            <a key={link.key} className={link.className}>
              {link.text}
            </a>
          ))}
        </div>

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
