import { useState,useEffect,createContext } from "react";

export const Themecontext = createContext()

export const ThemeProvider = ({children}) =>{

    const [theme,settheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(()=>{

    if(theme === "light"){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme",theme)

    },[theme])

    
    const toggletheme = ()=>{
        settheme((prevtheme)=>(
            prevtheme === "light" ? "dark" : "light"
        ))
    }

    return (
        <Themecontext.Provider value={{theme,toggletheme}}>
         {children}
       </Themecontext.Provider>
    )
}
