import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const NavMenu = () => (
  <>
    <p className="gpt3__navbar-link">
      <a href="#home">
        Home
      </a>
    </p>

    <p className="gpt3__navbar-link">
      <a href="#wgpt3">
        What is GPT3?
      </a>
    </p>

    <p className="gpt3__navbar-link">
      <a href="#possibility">
        Open AI
      </a>
    </p>

    <p className="gpt3__navbar-link">
      <a href="#features">
        Case Studies
      </a>
    </p>

    <p className="gpt3__navbar-link">
      <a href="#blog">
        Library
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo gpt3__navbar-link">
          <a href='/'>
            <img
              className="gpt3__navbar-links_logo-image"
              src={logo}
              alt='logo'
            />
          </a>
        </div>

        <nav className="gpt3__navbar-links_container">
          <NavMenu />
        </nav>
      </div>

      <div className="gpt3__navbar-sign">
        <p className="gpt3__navbar-sign__paragraph gpt3__navbar-link">
          Sign in
        </p>

        <button
          className="gpt3__navbar-sign__button gpt3__navbar-link"
          type="button"
        >
          Sign up
        </button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
          : <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <nav className="gpt3__navbar-menu_container-links">
              <NavMenu />
            </nav>

            <div className="gpt3__navbar-menu_container-links-sign">
              <p className='gpt3__navbar-link'>
                Sign in
              </p>

              <button
                type="button" className="gpt3__navbar-link"
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;