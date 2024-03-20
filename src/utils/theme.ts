export const setTheme = () => {
    if (typeof document !== 'undefined') {
        const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
        const theme = savedTheme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const lightThemeButton = document.getElementById('lightTheme');
        const darkThemeButton = document.getElementById('darkTheme');
        if (theme === 'light') {
            lightThemeButton?.classList.add('active');
            darkThemeButton?.classList.remove('active');
        } else {
            lightThemeButton?.classList.remove('active');
            darkThemeButton?.classList.add('active');
        }

        return theme;
    }
};

export const handleThemeChange = (selectedTheme: string) => {
    if (typeof document !== 'undefined') {
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    }
    return selectedTheme;
};
