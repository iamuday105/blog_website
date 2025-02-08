import React from 'react'
import Header from '../components/Header'
import { useLocation,useNavigate} from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
    <Header/>
      <div className="flex flex-row mt-18 ml-75 ">
         <button className="rounded-md px-4 border-2 py-1 cursor-pointer" onClick={() => navigation(-1)}>Back</button>
      <h2 className="text-xl font-bold uppercase ml-14">Blogs on <span className="underline">{category}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>

  )
}

export default CategoryPage