// src/components/BlogDetails.js

import React from 'react';

const BlogDetails = ({ blogs }) => {
    return (
        <div className="v1">   {/* from screenshot */}
            <h1>Blog Details</h1>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <h3>{blog.title}</h3>
                    <p><strong>{blog.author}</strong></p>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogDetails;