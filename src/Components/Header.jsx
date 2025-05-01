import React from 'react'
import {ThemeContext, useTheme} from '../Context/ThemeContext'
import {RiSunFill } from 'react-icons/ri'
import {FaMoon} from 'react-icons/fa'

const Header = () => {

    const { darkMode, toggleTheme } = useTheme(ThemeContext);

  return(
    <header className='flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800'>
        <h1 className='text-xl font-bold'>Theme Switcher</h1>
        <button onClick={toggleTheme} className='text-xl'>
            { darkMode ? <RiSunFill className='text-yellow-400'/>                                              : <FaMoon />}
        </button>
    </header>
  )
}

export default Header
