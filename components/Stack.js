import React from 'react';

const Stack = () => {
    const tools = ["Python", "Solidity", "Javascript/Typescript", "SQL/MySQL", "Java", "ReactJs", "Git/GitHub"];
    
    return (
        <div className="mx-4 my-10">
            <span className="font-black">I&apos;m most experienced with the following tools:</span>
            {tools.map((tool) => (
                <p key={tool}>{tool}</p>
            ))}
        </div>
    );
};

export default Stack;
