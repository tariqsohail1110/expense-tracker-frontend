import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.js';
import { useState, useEffect } from 'react';

function App() {

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
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          {/* <Header /> */}
          <main className="flex-1 overflow-auto bg-gray-100 dark:bg-zinc-800 transition-colors duration-500">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;