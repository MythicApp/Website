"use client";

import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('theme') : null;
        return savedTheme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        sessionStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
    };

    return (
        <footer className="footer">
            <div className="copyright">
                &copy; {new Date().getFullYear()} Mythic. All rights reserved. Not affiliated with Apple or any game platform.
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
