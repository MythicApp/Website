export const setTheme = () => {
    if (typeof document !== 'undefined') {
        const savedTheme = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('theme') : null;
        const theme = savedTheme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.body.setAttribute('data-theme', theme);
        sessionStorage.setItem('theme', theme);
        return theme;
    }
};
  
export const handleThemeChange = (selectedTheme: string) => {
    if (typeof document !== 'undefined') {
        document.body.setAttribute('data-theme', selectedTheme);
        sessionStorage.setItem('theme', selectedTheme);
    }
    return selectedTheme;
};
