import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.js';
import { useState, useEffect } from 'react';

function AuthLayout() {

        const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
        setThemeMode('light');
    }

    const darkTheme = () => {
        setThemeMode('dark');
    }

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove('light', 'dark');
        html.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider>
            <div className='bg-gray-100 h-screen dark:bg-zinc-800 transition-colors duration-500'>
                <Outlet/>
            </div>
        </ThemeProvider>
    )
}

export default AuthLayout