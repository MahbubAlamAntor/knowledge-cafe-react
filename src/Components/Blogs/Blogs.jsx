import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogsData.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2>I am from blogs</h2>
        </div>
    );
};

export default Blogs;