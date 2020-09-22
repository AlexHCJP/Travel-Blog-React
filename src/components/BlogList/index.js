import React from 'react'
import Blog from './Blog';

const BlogList = ({blogs}) =>{
    return(
        <div className="row">
            {blogs.map((blog, ind) => {
                return <Blog {...blog} key={ind}/>
            })}
        </div>
    )
}

export default BlogList