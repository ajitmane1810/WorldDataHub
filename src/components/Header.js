import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="shadow-md bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
          Where in the world?
        </h1>
        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 text-gray-800 dark:text-white"
        >
          {darkMode ? (
            <MoonIcon className="h-8 w-8" />
          ) : (
            <SunIcon className="h-8 w-8" />
          )}
          {/* <span className='text-xl font-bold'>{darkMode ? 'Light Theme' : 'Dark Theme'}</span> */}
        </button>
      </div>
    </header>
  );
}