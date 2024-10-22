import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBooksBtn,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogsData.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2>I am from blogs {blogs.length}</h2>
            {
                blogs.map((blog, idx) => <Blog key={idx} handleMarkAsRead={handleMarkAsRead} handleBooksBtn={handleBooksBtn} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBooksBtn : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blogs;