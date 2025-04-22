import React, { useEffect } from 'react';

    /*
     * This page has been deprecated.
     * Now look to the gear in the top right for dark-mode toggle.
     */

export default function Settings() {
  useEffect(() => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const applyDarkMode = (enabled) => {
      document.documentElement.classList.toggle('dark-mode', enabled);
      document.body.classList.toggle('dark-mode', enabled);
    };

    let currentMode = localStorage.getItem('darkMode') || 'enabled';
    applyDarkMode(currentMode === 'enabled');

    if (toggleSwitch) {
      toggleSwitch.checked = currentMode === 'enabled';

      toggleSwitch.addEventListener('change', () => {
        const isChecked = toggleSwitch.checked;
        localStorage.setItem('darkMode', isChecked ? 'enabled' : 'disabled');
        applyDarkMode(isChecked);
      });
    }
  }, []);

  return (
    <main>
      <h2>Settings</h2>
      <div className="toggle-wrapper">
        <label htmlFor="darkModeToggle">Enable Dark Mode:</label>
        <div className="toggle-container">
          <input type="checkbox" id="darkModeToggle" />
          <label htmlFor="darkModeToggle" className="toggle-label">
            <span className="toggle-inner"></span>
            <span className="toggle-switch"></span>
          </label>
        </div>
      </div>
    </main>
  );
}