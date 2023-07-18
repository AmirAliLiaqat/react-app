import React, { useState } from "react";
import blogProps from "./BlogProps";

const BlogCard = () => {

    const [data, setData] = useState(blogProps);
    console.log(blogProps);

    return(
        <>
            {
                data.map((currElem) => {
                    return(
                        <div className="blog-card">
                            <div className="blog-card-header">
                                <img src={currElem.img} className="blog-card-img" alt="" />
                            </div>
                            <div className="blog-card-body">
                                <h5 className="blog-card-title">{currElem.name}</h5>

                                <p className="blog-card-caption">
                                    <a href="#">By: {currElem.author}</a>
                                    <a href="#"><i className="ti-heart text-danger"></i> {currElem.likes}</a>
                                    <a href="#"><i className="ti-comment"></i> {currElem.comments}</a>
                                </p>
                                <p>{currElem.content}</p>
                                <a href={currElem.id} className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BlogCard;