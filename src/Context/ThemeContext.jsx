import React, { createContext, useContext, useEffect, useState } from 'react'

// creating the context
 export const ThemeContext = createContext();

//creating provider component

export  const ThemeProvider = ({ children })=>{

    const[ darkMode, setDarkMode] = useState(false);


    useEffect(()=>{
        const root = window.document.documentElement;
        if(darkMode){
            root.classList.add("dark");
        }
        else{
            root.classList.remove('dark');
        }
    },[darkMode])


    //Toggle function

    const toggleTheme = ()=>{ 
        setDarkMode((prev)=> !prev);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme}}>
            
                { children }
            
        </ThemeContext.Provider>
    )
};


//custom hook to use context easily

export const useTheme = ()=> useContext(ThemeContext);