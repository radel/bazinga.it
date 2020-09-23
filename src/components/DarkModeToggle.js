import React from 'react';
import DarkIcon from '../assets/dark.svg'
import LightIcon from '../assets/light.svg'

const toggleDark = () => {
    document.documentElement.classList.toggle('mode-dark');
}

const DarkModeToggle = ({children}) => {
    return (
        <button title="toggle dark mode" aria-label="toggle dark mode" onClick={toggleDark}>
            <div className="dark:hidden w-8 h-8">
              <DarkIcon/> 
            </div>
            <div className="hidden dark:block w-8 h-8">
              <LightIcon/> 
            </div>
        </button>
    )
}

export default DarkModeToggle;