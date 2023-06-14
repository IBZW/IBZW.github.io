import React from 'react';
import './Project.css';
import { projects } from '../../info';
import ProjectCard from '../ProjectCard/ProjectCard';

function Project() {
    return (
        <section className="section--project" id="symbol">
            <div className="inner">
                <div className="project-title">
                    <p>{projects.title}</p>
                </div>
                <div className="project-subtitle">
                    <p>{projects.subTitle}</p>
                </div>
                <div className="project-cards">
                    {projects.lists.map((list, i) => {
                        // Exclude the 'url' property from the project object passed to ProjectCard
                        const { url, ...projectData } = list;
                        return <ProjectCard project={projectData} key={i} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Project;