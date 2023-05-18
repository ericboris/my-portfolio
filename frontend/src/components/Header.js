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
        <div className="sticky flex items-center bg-white top-0 justify-between mx-4 border">
            <h1>
                <a
                    href="http://localhost:3000/" 
                    className="text-2xl hover:text-sky-600 font-bold border" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Eric Boris
                </a>
            </h1>

            <div className="flex gap-2 border">
                {links.map(({ title, link }) => (
                    <a key={title} 
                        className="hover:text-sky-600 font-bold text-sm border"
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
