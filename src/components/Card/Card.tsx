import React from 'react';
import './Card.css';
function BlogCard({ blogs }: Props) {
    const Fade = require('react-reveal/Fade')
    return (
        <Fade duration={800} bottom>
            <div className="blog-card">
                <div className="blog-card-title">
                    <p>{blogs.title}</p>
                </div>
                <div className="blog-card-desc">
                    <p>{blogs.desc}</p>
                </div>
            </div>
        </Fade>
    )
}

interface Props {
    blogs: {
        title: string,
        desc: string
    }
}

export default BlogCard;