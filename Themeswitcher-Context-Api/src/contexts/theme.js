import React from 'react';
import createContext from 'react';
const ThemeContext=React.createContext(
    {
        thememode:"light",
        darkTheme:()=>{},
        lightTheme:()=>{}
    }
);
export default ThemeContext