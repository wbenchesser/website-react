import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem('darkMode') !== 'disabled'
  );
  const menuRef = useRef(null);

  // on mount, ensure the <html> has the proper class
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  // close dropdown on outside click
  useEffect(() => {
    const onClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const gearSrc = isDark
    ? '/images/gear-dark.svg'
    : '/images/gear-light.svg';

  return (
    <header className="site-header">
      <h1 className="site-name">Ben Chesser</h1>

      <nav className="nav-bar">
        <Link className={pathname === '/' ? 'selected' : ''} to="/">Home</Link>
        <Link className={pathname.startsWith('/blog') ? 'selected' : ''} to="/blog">Blog</Link>
        <Link className={pathname.startsWith('/poems') ? 'selected' : ''} to="/poems">Writing</Link>
        <Link className={pathname === '/gallery' ? 'selected' : ''} to="/gallery">Gallery</Link>
      </nav>

      <div className="settings-menu" ref={menuRef}>
        <img
          src={gearSrc}
          alt="Settings"
          className="settings-icon"
          onClick={() => setOpen(o => !o)}
        />

        {open && (
          <div className="settings-dropdown">
            <div className="toggle-wrapper">
              <label htmlFor="darkToggleDropdown">Dark Mode</label>
              <div className="toggle-container">
                <input
                  type="checkbox"
                  id="darkToggleDropdown"
                  checked={isDark}
                  onChange={e => {
                    const on = e.target.checked;
                    setIsDark(on);
                    localStorage.setItem('darkMode', on ? 'enabled' : 'disabled');
                  }}
                />
                <label htmlFor="darkToggleDropdown" className="toggle-label">
                  <span className="toggle-inner"></span>
                  <span className="toggle-switch"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}