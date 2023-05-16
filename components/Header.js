import React from 'react';

const Header = () => (
    <div className="sticky top-2 bg-jaune shadow text-raisin-black text-2xl px-4 py-1 flex justify-between w-full">
        <div>
            <h1 className="font-bold">
                <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">Home</a>
            </h1>
        </div>

        <div>
            <ul className="flex">
                <li className="mr-1.5 hover:underline decoration-solid text-gray-700 line-through pointer-events-none">
                    <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
                <li className="ml-1.5 hover:underline decoration-solid">
                    <a href="https://github.com/ericboris" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;
