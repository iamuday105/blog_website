import React from 'react'
import { NavLink } from 'react-router-dom'

function Blogdetails({post}) {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span className="font-bold">{post.title}</span>
        </NavLink>
        <p>
            By
            {" "}
            <span className="italic">{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span className="underline font-bold text-sm">{post.category}</span>
            </NavLink>
        </p>
        <p className="text-xs">Posted on {post.date} </p>
        <p className="mt-3 mb-2">{post.content}</p>
        <div className='flex gap-3 text-sm text-blue-700'>
            {
                post.tags.map((tag,index) =>(
                    <NavLink key={index} to = {`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default Blogdetails