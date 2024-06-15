document.addEventListener('DOMContentLoaded', () => {
    const setThemeState = (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        document.getElementById('lightTheme').classList.toggle('active', newTheme === 'light');
        document.getElementById('darkTheme').classList.toggle('active', newTheme === 'dark');
    };

    const getThemeFromLocalStorage = () => {
        return localStorage.getItem('theme') || 'light';
    };

    const handleThemeClick = (selectedTheme) => {
        const newTheme = handleThemeChange(selectedTheme);
        setThemeState(newTheme);
    };

    const handleThemeChange = (selectedTheme) => {
        localStorage.setItem('theme', selectedTheme);
        return selectedTheme;
    };

    // Set initial theme state
    const theme = getThemeFromLocalStorage();
    setThemeState(theme);

    // Attach event listeners to buttons
    document.getElementById('lightTheme').onclick = () => handleThemeClick('light');
    document.getElementById('darkTheme').onclick = () => handleThemeClick('dark');
});