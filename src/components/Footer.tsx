"use client";

import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [theme, setTheme] = useState<string>('auto');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            setBodyTheme(savedTheme);
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(systemTheme);
            setBodyTheme(systemTheme);
        }
    }, []);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
        setBodyTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    };

    const setBodyTheme = (selectedTheme: string) => {
        document.body.setAttribute('data-theme', selectedTheme);
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