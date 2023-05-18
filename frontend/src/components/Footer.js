import React from 'react';

const Footer = () => {
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
        <div className="sticky flex justify-center font-extralight text-xs gap-4">
            {links.map(({ title, link }) => (
                <a 
                    key={title}
                    href={link}
                >
                    {title} 
                </a>
            ))} 
        </div>
    );
};

export default Footer;
