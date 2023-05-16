import React from 'react';

const Contact = () => {
    const links = [
        {
            title: 'Github',
            link: 'https://github.com/ericboris',
        },
        {
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/ericboris/',
        },
    ];

    return (
        <div className="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">getInTouch();</h2>
            <p className="text-xl">
                Stay up to date and contact me at these links..
            </p>

            <div className="flex flex-wrap mt-2">
                {links.map(({ title, link }) => (
                    <div key={title} className="font-black text-pink">
                        <a className="mr-4" href={link} target="blank" rel="noopener noreferrer"> {title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
