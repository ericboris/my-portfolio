import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            company_title: "Geometry",
            company_subtitle: "Decentralized Exchange",
            description: "Reimagined trading on the ethereum blockchain.",
            image: "/helix.png",
            link: "https://github.com/ericboris/aura-backend",
        },
    ];

    return (
        <div className="my-10 mx-4">
            {projects.map((project) => (
                <Project project={project} />
            ))}
        </div>
    );
};

export default Projects;
