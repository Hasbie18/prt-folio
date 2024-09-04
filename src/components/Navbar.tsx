import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Main', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Reviews', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll ? 'backdrop-blur-md bg-opacity-80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold" style={{ color: '#f1f1f1' }}>
          MASITHOH
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} style={{ color: '#f1f1f1' }} /> : <FaBars size={24} style={{ color: '#f1f1f1' }} />}
          </button>
        </div>

        {/* nav links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'top-14 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="px-4 py-2 hover:text-yellow-500 cursor-pointer">
              <a href={link.href} style={{ color: '#f1f1f1' }}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
