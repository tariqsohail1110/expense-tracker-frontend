import React from 'react'
import useTheme from '../contexts/theme.js';

export default function ThemeButton({ children, className }) {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const handleThemeToggle = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    const toggleIcon = (icon1, icon2) => {
        if (themeMode === 'light') {
            return icon1;
        } else {
            return icon2;
        }
    }

    return (
        <button
            onClick={handleThemeToggle}
            className={className || "flex gap-3 items-center justify-center lg:justify-start w-full text-center lg:text-left focus:outline-none"}
        >
            {toggleIcon (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3
                            7 7 0 0 0 21 12.79z" />
                </svg>,
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    >
                    <circle cx="12" cy="12" r="4" />

                    <path d="M12 2v2" />
                    <path d="M12 20v2" />

                    <path d="M2 12h2" />
                    <path d="M20 12h2" />

                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />

                    <path d="M4.93 19.07l1.41-1.41" />
                    <path d="M17.66 6.34l1.41-1.41" />
                </svg>
            )}
            {children}
        </button>
    );
}