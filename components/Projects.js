import React from 'react';

const MyProjects = () => {
    const projects = [
        {
            title: "Proj1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://preview.redd.it/0y99sk4a4a0b1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=91224f8d1b8c29edc7cf0db54d57c1bb5c8c97a9",
            tags: "Python, Solidity, SQL, React, Flask",
            github: "https://github.com/ericboris",
            demo: "https://github.com/ericboris",
        },
        { title: "Proj1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://preview.redd.it/0y99sk4a4a0b1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=91224f8d1b8c29edc7cf0db54d57c1bb5c8c97a9",
            tags: "Python, Solidity, SQL, React, Flask",
            github: "https://github.com/ericboris",
            demo: "https://github.com/ericboris",
        },
        {
            title: "Proj1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://preview.redd.it/0y99sk4a4a0b1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=91224f8d1b8c29edc7cf0db54d57c1bb5c8c97a9",
            tags: "Python, Solidity, SQL, React, Flask",
            github: "https://github.com/ericboris",
            demo: "https://github.com/ericboris",
        },
    ];

    return (
        <div className="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">myProjects();</h2>
            <div className="flex-raw md:flex">
                {projects.map(({ title, description, image, tags, github, demo }) => (
                    <div key={title} className="bg-happy-black my-2 md:mx-2 p-2">
                        <div className="flex flex-col">
                            <h3 className="text-2xl">{title}</h3>
                            <img className="project-image" src={image} alt={title} />
                            <p className="text-xl">{description}</p>
                            <p className="font-black text-pink">{tags}</p>

                            <div className="font-black flex mt-4">
                                <a href={github} target="_blank" rel="noopener noreferrer" className="mr-4">Github</a>
                                <a href={demo} target="_blank" rel="noopener noreferrer">Live demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
