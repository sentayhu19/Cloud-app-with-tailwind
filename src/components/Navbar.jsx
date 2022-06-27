import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = React.useState(true);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between  items-center  w-full h-full">
        <div className="flex items-center">
          <h1 className="text-40xl font-bold mr-4 sm:text-4xl">Super</h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="home" smooth offset={500} duration={500}> Home</Link>
              {' '}

            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth offset={-200} duration={500}>About</Link>
              {' '}

            </li>
            <li className="cursor-pointer">
              <Link
                to="support"
                smooth
                offset={50}
                duration={500}
              >
                Support
              </Link>
              {' '}

            </li>
            <li className="cursor-pointer">
              <Link
                to="platforms"
                smooth
                offset={50}
                duration={500}
              >
                Platform
              </Link>
              {' '}

            </li>
            <li className="cursor-pointer">
              <Link
                to="pricing"
                smooth
                offset={50}
                duration={500}
              >
                Pricing
              </Link>
              {' '}

            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className="hidden md:flex pr-4">
          <button type="button" className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button type="button" className="px-8 py-3 text-white bg-indigo-600 rounded-md ">Sign up</button>
        </div>
        <div className="md:hidden" onClick={handleClick} onKeyUp={handleClick} role="button">
          {nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <div className={nav ? 'hidden' : '' + 'md:hidden'}>
        <ul className="absolute bg-zinc-200 w-full px-8px">
          <li className="cursor-pointer">
            <Link to="home" smooth onClick={handleClick} offset={500} duration={500}> Home</Link>
            {' '}

          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth onClick={handleClick} offset={-200} duration={500}>About</Link>
            {' '}

          </li>
          <li className="cursor-pointer">
            <Link
              to="support"
              onClick={handleClick}
              smooth
              offset={50}
              duration={500}
            >
              Support
            </Link>
            {' '}

          </li>
          <li className="cursor-pointer">
            <Link
              to="platforms"
              onClick={handleClick}
              smooth
              offset={50}
              duration={500}
            >
              Platform
            </Link>
            {' '}

          </li>
          <li className="cursor-pointer">
            <Link
              onClick={handleClick}
              to="pricing"
              smooth
              offset={50}
              duration={500}
            >
              Pricing
            </Link>
            {' '}

          </li>
          <li>
            <div className="flex flex-col my-4">
              <button type="button" className="border-none bg-transparent text-black mr-4">
                Sign in
              </button>
              <button type="button" className="px-8 py-3 text-white border bg-indigo-600 ">Sign up</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
