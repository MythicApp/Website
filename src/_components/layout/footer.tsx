"use client";

import React, { useState } from 'react';
import { setTheme, handleThemeChange } from '@/utils/theme';

const Footer: React.FC = () => {
const [theme, setThemeState] = useState<string>(setTheme() || '');

const handleThemeClick = (selectedTheme: string) => {
    const newTheme = handleThemeChange(selectedTheme);
    setThemeState(newTheme);
};

  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Mythic. All rights reserved. Not affiliated with Apple or any game platform.
      </div>
      <div className="theme-switcher">
        <button
          className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => handleThemeClick('light')}
        >
          Light
        </button>
        <button
          className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => handleThemeClick('dark')}
        >
          Dark
        </button>
      </div>
    </footer>
  );
};

export default Footer;