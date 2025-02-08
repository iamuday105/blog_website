import { useContext, useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage'
import { AppContext } from './context/AppContext'
import {useLocation,Routes, Route, useSearchParams } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; 
import ThemeToggle from './components/ThemeToggle'

function App() {
const {fetchBlogPosts} = useContext(AppContext);
const [searchParams, setSearchParams] = useSearchParams();
const { theme } = useTheme();

const location = useLocation();
useEffect(()=>{
   const page = searchParams.get("page")?? 1;
   if(location.pathname.includes("tags")){
    // iska matlab tag wala page show krna hai
    // last wala slash ->last wala entity in url
    const tag = location.pathname.split("/").at(-1).replace("-", " ");
    fetchBlogPosts(Number(page), tag);
   }else if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replace("-", " ");
    fetchBlogPosts(Number(page),null, category);
   }else{
    fetchBlogPosts(Number(page))
   }
},[location.pathname,location.search]);

  return (
    <div className={theme}>
     <ThemeToggle/>
     <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/blog/:blogId' element={<BlogPage/>}/>
        <Route path= '/tags/:tag' element={<TagPage/>}/>
        <Route path= '/categories/:category' element={<CategoryPage/>}/>
     </Routes>
     </div>
  )
}

export default App
