import React, { useContext, useEffect, useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Blogdetails from '../components/Blogdetails';

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();

    const {setLoading,loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            
        }catch(err){
             console.log("data fetching error in BlogPage");
             setBlog(null);
             setRelatedBlogs([]);

        }
        setLoading(false);
        
    }

    useEffect(() =>{
          if(blogId){
            fetchRelatedBlogs();
          }
    },[location.pathname])

  return (
    <div>
        <Header/>
        <div className="mt-15 ml-79"> 
            <button className="rounded-md px-4 border-2 py-1 cursor-pointer" onClick={()=> navigation(-1)}>back</button>

        </div>
        <div  className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7  justify-center items-center mx-auto">
        {
            loading ?
            (<div>
                <p>Loading..</p>
            </div>) :(
            blog ? (<div>
                <Blogdetails post={blog}/>
                <h2 className="text-xl font-bold mt-4 mb-3 underline uppercase">Related Blogs</h2>
                {
                    relatedblogs.map((post,index) => (
                        <div key= {post.id || index}>
                            <Blogdetails post ={post}/>
                        </div>
                    ))
                }
            </div>):(<div><p>No Blog Found</p></div>))
        }
        </div>
    </div>
  )
}

export default BlogPage