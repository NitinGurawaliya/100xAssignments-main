import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="lg:px-16 px-4 bg-white  flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        {/* Use Link to navigate to the home page ("/") */}
        <Link to="/">
          <button className="text-3xl text-blue-700 font-bold">Nitin</button>
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li className="md:p-4 py-3 px-0 block">
              <a href="https://www.linkedin.com/in/nitin-kumar-1b6324248/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <a href="https://github.com/NitinGurawaliya/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </li>
            <li className="md:p-4 py-3 px-0 block">
              <a href="https://twitter.com/nitin93937331" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
