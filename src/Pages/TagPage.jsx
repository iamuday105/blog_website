import React from 'react'
import Header from '../components/Header'
import { useLocation,useNavigate} from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
    <Header/>
    <div className=" flex flex-row mt-18 ml-79">
      <button  className="rounded-md px-4 border-2 py-1 fixed cursor-pointer" onClick={() => navigation(-1)}>Back</button>
    <h2 className="w-11/12 max-w-[670px]  flex flex-col ml-26 text-xl font-bold ">Blogs tagged <span>#{tag}</span></h2>
    </div>
          <Blogs/>
          <Pagination/>
    </div>
  )
}

export default TagPage