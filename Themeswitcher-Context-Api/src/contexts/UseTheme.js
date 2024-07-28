import React,{useContext} from 'react'
import ThemeContext from './theme'

//custom hook
function UseTheme() {
return useContext(ThemeContext);
}

export default UseTheme
