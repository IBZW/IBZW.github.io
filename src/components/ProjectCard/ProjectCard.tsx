import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
            <div className="project-card-main">
                <div className="card-title">
                    <p>{project.title}</p>
                </div>
                <div className="card-desc">
                    <p>{project.desc}</p>
                </div>
            </div>
        </Fade>
    );
}

interface Props {
    project: {
        title: string,
        desc: string
    }
}

export default ProjectCard;