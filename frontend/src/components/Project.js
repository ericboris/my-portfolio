import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Project = ({ project }) => {
    const company_title = project.company_title;
    const company_subtitle = project.company_subtitle;
    const description = project.description;
    const image = project.image;
    const link = project.link;

    return (
        <div className="my-4 md:my-6">
            <div className="mx-4 sm:mx-auto md:max-w-5xl">
                <a href={link}>
                    <div key={company_title} className="flex flex-col items-center md:my-6">
                        <div className="flex text-left items-center gap-4">
                            <p className="text-xl sm:text-2xl md:text-4xl font-bold">{company_title}</p>
                            <p className="text-sm sm:text-lg md:text-2xl">{company_subtitle}</p>
                        </div>
                        <div className="my-2">
                            <img src={image} className="max-w-full h-auto"/>
                        </div>
                    </div>
                </a>
            </div> 
        </div>
    );
};

export default Project;
