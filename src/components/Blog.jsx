import React from "react";
import Navbar from "./Navbar";
import BlogCard from "./blog/BlogCard"
import { useLocation } from "react-router-dom";

const Blog = () => {
    const location = useLocation();
    return(
        <>
            
            { location.pathname === `/` ? <div></div> : <div className="bg-light mb-5 py-5"><Navbar/></div> }
            <section className="section" id="blog">
                <div className="container text-center">
                    <p className="section-subtitle">Recent Posts?</p>
                    <h6 className="section-title mb-6">Blog</h6>
                    <BlogCard/>
                </div>
            </section>
        </>
    )
}

export default Blog;