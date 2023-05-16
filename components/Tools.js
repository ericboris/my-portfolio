import React from 'react';

const Tools = () => {
    const tools = [
        {
        title: "Git & Github",
        description: "Version control.",
        },
    ];

    return (
        <div className="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">myTools();</h2>
            <div className="text-xl">
                {tools.map(({ title, description }) => (
                    <ul key={title}>
                        <li>
                            <span className="font-black">{title}</span> : {description}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Tools;
