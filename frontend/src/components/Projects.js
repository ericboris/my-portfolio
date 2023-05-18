import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Project from './Project';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
    const projects = [
        {
            company_title: "Geometry",
            company_subtitle: "Decentralized Exchange",
            description: "Reimagined trading on the ethereum blockchain.",
            image: "/helix.png",
            link: "https://github.com/ericboris/aura-backend",
        },
        {
            company_title: "Geometry2",
            company_subtitle: "Decentralized Exchange",
            description: "Reimagined trading on the ethereum blockchain.",
            image: "/helix.png",
            link: "https://github.com/ericboris/aura-backend",
        },
    ];

    return (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </Carousel>
    );
};

export default Projects;
