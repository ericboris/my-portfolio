import React from 'react';

const Header = () => {
    const links = [
        {
            title: 'Github',
            link: 'https://github.com/ericboris',
        },
        {
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/eric-boris/',
        },
        {
            title: 'Resume',
            link: 'https://www.linkedin.com/in/eric-boris/',
        },
    ];

    return (
        <div className="sticky flex h-10 items-center bg-white top-0 justify-between w-full text-decoration-none">
            <h1>
                <a
                    href="http://localhost:3000/" 
                    className="text-2xl mx-1 hover:text-sky-600 font-black" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Eric Boris
                </a>
            </h1>

            <div className="flex">
                {links.map(({ title, link }) => (
                    <a 
                        className="mx-1 hover:text-sky-600 font-bold"
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Header;
