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
        <div className="sticky flex justify-center my-4 font-extralight text-sm md:text-base lg:text-lg gap-4 md:gap-8">
            {links.map(({ title, link }, index) => (
                <a
                    key={`${index}-${title}`}
                    href={link}
                >
                    {title}
                </a>
            ))}
        </div>
    );
};

export default Footer;
