import React, { useContext } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { RiLightbulbFlashFill } from 'react-icons/ri'
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-center h-10 transition duration-500 ease-in-out p-2 px-[10px] rounded-full">
            {theme === 'dark' ? (
                <RiLightbulbFlashFill
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-orange-300 text-xl cursor-pointer"
                />
            ) : (
                <RiLightbulbFlashFill
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-orange-300 text-xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;