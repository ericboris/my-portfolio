import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

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
            {projects.map(({ company_title, company_subtitle, description, image }) => (
                <div key={company_title} className="flex flex-col items-center my-6">
                    <div className="flex text-left items-center gap-2">
                        <p className="text-xl font-bold">{company_title}</p>
                        <p className="text-sm">{company_subtitle}</p>
                    </div>
                    <p className="text-sm font-light">{description}</p>
                    <a  
                        href="https://github.com/ericboris/aura-backend"
                        className="flex items-center text-sm font-semibold hover:text-sky-600"
                    >
                        View Project
                        <ArrowRightIcon className="w-4 h-4 text-orange-500" />
                    </a>
                    <div className="m-4">
                        <img src={image} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
