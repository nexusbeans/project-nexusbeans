import React, { useEffect, useState } from "react";

const ThemeMode = () => {
    const [theme, setTheme] = useState(() => {
        // Check local storage for the theme or default to light
        return JSON.parse(localStorage.getItem('PageTheme')) || 'light';
      });
    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('PageTheme', JSON.stringify(newTheme));
      };
    
      // Set initial theme on mount
      useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
      }, [theme]);
    
  return (
    <>
      <div className="switch__tab">
        <span className="switch__tab-btn active light-mode-title">Light</span>
        <span className="mode__switch" onClick={toggleTheme}>
          <span />
        </span>
        <span className="switch__tab-btn dark-mode-title">Dark</span>
      </div>
    </>
  );
};

export default ThemeMode;
