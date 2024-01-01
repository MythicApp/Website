"use client";

import React, { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

(function() {
    if (isBrowser) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }
    }
})();

const Footer: React.FC = () => {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
    };


    return (
        <footer className="footer">
            <div className="copyright">
                &copy; {new Date().getFullYear()} Mythic. All rights reserved. Not affiliated with Apple or other game launchers.
            </div>
            <div className="theme-switcher">
                <button
                    className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('light')}
                >
                    Light
                </button>
                <button
                    className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleThemeChange('dark')}
                >
                    Dark
                </button>
            </div>
        </footer>
    );
};

export default Footer;