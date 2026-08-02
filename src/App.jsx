import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.js';
import { useState, useEffect } from 'react';

function App() {

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