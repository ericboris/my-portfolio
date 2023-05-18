import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Menu from './Menu';

const Header = () => {
    const links = [
        {
            title: 'Projects',
            link: 'https://www.linkedin.com/in/eric-boris/',
        },
        {
            title: 'Education',
            link: 'https://www.linkedin.com/in/eric-boris/',
        },
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="flex items-center justify-between h-16 lg:h-20 xl:h-24">
                   <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="http://localhost:3000/"
                                className="text-2xl hover:text-sky-600 font-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Eric Boris
                            </a> 
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map(({ title, link }, index) => (
                                <a
                                    href={link}
                                    key={`${index}-${title}`}
                                    className="text-black hover:text-sky-600 px-3 py-2 rounded-md text-sm md:text-base lg:text-lg font-medium"
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-sky-600 hover:ring-1 hover:ring-offset-2 hover:ring-offset-gray-200 hover:ring-white"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <Bars3Icon className="w-6 h-6 text-black" />
                            ) : (
                                <XMarkIcon className="w-6 h-6 text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Menu links={links} isMenuOpen={isMenuOpen} />

        </nav>
    );
};

export default Header;
