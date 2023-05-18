import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="http://localhost:3000/"
                                className="text-2xl hover:text-sky-600 font-bold border"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Eric Boris
                            </a> 
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map(({ title, link }) => (
                                <a
                                    href={link}
                                    key={title}
                                    className="text-black hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium"
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

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full z-50 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map(({ title, link }) => (
                            <a
                                href={link}
                                key={title}
                                className="text-black hover:bg-gray-50 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
