import React from 'react';
import './Blog.css';
import { blogs } from '../../info';
import BlogCard from '../Card/Card';

function Blog() {
    return (
        <section className="section--blog" id="blog">
            <div className="inner">
                <div className="blog-title">
                    <p>{blogs.title}</p>
                </div>
                <div className="blog-subtitle">
                    <p>{blogs.subTitle}</p>
                </div>
                <div className="blog-content">
                    {blogs.lists.map((list, i) => {
                        // Exclude the 'url' property from the blog object passed to BlogCard
                        const { url, ...blogData } = list;
                        return <BlogCard blogs={blogData} key={i} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blog;