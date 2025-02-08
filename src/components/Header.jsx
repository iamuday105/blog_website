import React from 'react'
import { useTheme } from "../context/ThemeContext"; 

function Header() {
  const { theme } = useTheme();
  console.log("theme", theme);
  return (
    <div className={`w-full shadow-md py-2 fixed top-0 ${theme=="dark"? "bg-[#121212]":"bg-white"}`}>
    <header className="text-center ">

    <h1 className="text-3xl font-bold">UDAY BLOGS</h1>
    </header>
    </div>
  )
}

export default Header