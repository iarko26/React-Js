import React,{useState,useEffect} from 'react'
import ThemeContext from './theme'
function ThemeContextProvider({children}) {
    const [thememode,setthememode]=useState("light");
    const darkTheme=()=>{
        setthememode("dark");
    }
    const lightTheme=()=>{
        setthememode("light");
    }
useEffect(()=>{
    document.querySelector('html').classList.remove('dark');
    document.querySelector('html').classList.remove('light');
    document.querySelector('html').classList.add(thememode);
},[thememode])
    
  return (
    <ThemeContext.Provider value={{thememode,darkTheme,lightTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
