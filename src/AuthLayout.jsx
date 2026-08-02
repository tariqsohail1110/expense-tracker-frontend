import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.js';
import { useState, useEffect } from 'react';

function AuthLayout() {

    const [themeMode, setThemeMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });

    const lightTheme = () => {
        setThemeMode('light');
        localStorage.setItem('theme', 'light');
    };

    const darkTheme = () => {
        setThemeMode('dark');
        localStorage.setItem('theme', 'dark');
    };

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove('light', 'dark');
        if (themeMode) {
            html.classList.add(themeMode);
        }
    }, [themeMode]);

    return (
        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
            <div className='bg-gray-100 h-screen dark:bg-zinc-800 transition-colors duration-500'>
                <Outlet/>
            </div>
        </ThemeProvider>
    )
}

export default AuthLayout