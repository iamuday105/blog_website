import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';
import Spinner from './Spinner';
import Blogdetails from './Blogdetails';


function Blogs() {
    // consume

    const {loading,posts} = useContext(AppContext);
    console.log(posts);
  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-12 justify-center items-center mx-auto">
        {
            loading? 

            (<Spinner/>) : 
            (
                posts.length === 0 ? 
                (<div>
                    <p>No Post Found</p>
                </div>):
                (
                    posts.map((post) => (
                       <Blogdetails key={post.id} post={post}/>
                    ))
                )
            )
        }
    </div>
  )
}

export default Blogs