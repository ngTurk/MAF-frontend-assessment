import React, { useState, useEffect, useRef } from 'react';

import './Header.scss';

import DugatiLogo from '../../assets/images/ducati-logo.png';
import MenuLogo from '../../assets/images/icons/menu-icon.png';
import MonsterLogo from '../../assets/images/monster-logo.png';
import WorldIcon from '../../assets/images/icons/world-icon.png';
import CloseIcon from '../../assets/images/icons/close.svg';

export default function Header() {
  const navRef = useRef(null);
  const [isCollapsed, toggleSideBar] = useState(false);

  const handleClickOutside = event => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      toggleSideBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
  }, []);

  return (
    <header ref={navRef}>
      <nav className="navigation flex items-start justify-between">
        <img
          className="navigation__menu-icon"
          src={MenuLogo} alt="menu logo"
          onClick={() => toggleSideBar(!isCollapsed)}
        />
        <span className="navigation__brand-logo flex flex-col items-center">
          <img src={DugatiLogo} alt="menu logo" />
          <img src={MonsterLogo} alt="monster logo" />
        </span>
        <span className="navigation__right-side flex">
          <img src={WorldIcon} alt="world logo" />
          <span>INTERNATIONAL WEBSITE | MY DUCATI</span>
        </span>
      </nav>
      <div className={`navigation-sidebar${isCollapsed ? ' navigation__sidebar-collapsed' : ''}`}>
        <aside>
          <img
            src={CloseIcon} alt="close button icon"
            onClick={() => toggleSideBar(!isCollapsed)}
          />
          <ul>
            <li>Bikes</li>
            <li>Racing</li>
            <li>Events</li>
            <li>Equipment</li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
