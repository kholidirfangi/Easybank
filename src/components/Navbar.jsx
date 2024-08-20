import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };
  return (
    <header className="flex fixed top-0 z-50 bg-white w-full justify-between px-10 py-4 items-center xl:px-40">
      <div>
        <img
          src="/../src/assets/images/logo.svg"
          alt="logo"
          className="scale-125"
        />
      </div>

      <nav
        className={` ${
          isOpen ? 'flex' : 'hidden'
        } xl:flex xl:flex-row justify-center xl:static xl:shadow-none xl:bg-inherit xl:gap-10 absolute w-4/5 top-16  bg-very-light-gray rounded-sm flex-col text-center text-lg gap-2 shadow-md text-grayish-blue`}
      >
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className={`${
            activeLink === 'home'
              ? 'xl:border-b-4 xl:border-b-lime-green text-dark-blue font-bold'
              : ''
          } block hover:font-bold py-4 xl:hover:border-b-4 xl:hover:border-b-lime-green hover:text-dark-blue`}
        >
          Home
        </a>
        <div>
          <a
            href="#about"
            onClick={() => handleNavClick('about')}
            className={`${
              activeLink === 'about'
                ? 'xl:border-b-4 xl:border-b-lime-green text-dark-blue font-bold'
                : ''
            } block hover:font-bold py-4 xl:hover:border-b-4 xl:hover:border-b-lime-green hover:text-dark-blue`}
          >
            About
          </a>
        </div>
        <div>
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className={`${
              activeLink === 'contact'
                ? 'xl:border-b-4 xl:border-b-lime-green text-dark-blue font-bold'
                : ''
            } block hover:font-bold py-4 xl:hover:border-b-4 xl:hover:border-b-lime-green hover:text-dark-blue`}
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#blog"
            onClick={() => handleNavClick('blog')}
            className={`${
              activeLink === 'blog'
                ? 'xl:border-b-4 xl:border-b-lime-green text-dark-blue font-bold'
                : ''
            } block hover:font-bold py-4 xl:hover:border-b-4 xl:hover:border-b-lime-green hover:text-dark-blue`}
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#careers"
            onClick={() => handleNavClick('careers')}
            className={`${
              activeLink === 'careers'
                ? 'xl:border-b-4 xl:border-b-lime-green text-dark-blue font-bold'
                : ''
            } block hover:font-bold py-4 xl:hover:border-b-4 xl:hover:border-b-lime-green hover:text-dark-blue`}
          >
            Careers
          </a>
        </div>
      </nav>
      <div className="hidden xl:block">
        <Button />
      </div>
      <div className="cursor-pointer xl:hidden" onClick={handleClick}>
        {isOpen ? (
          <div>
            <img src="../src/assets/images/icon-close.svg" alt="" />
          </div>
        ) : (
          <div>
            <img src="../src/assets/images/icon-hamburger.svg" alt="" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
