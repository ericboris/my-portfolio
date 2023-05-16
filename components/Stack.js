import React from 'react';

const Stack = () => {
    const stacks = ["ReactJs", "Vue.Js", "NextJS", "NodeJS", "RestAPI", "GraphQL",];
    
    return (
        <div className="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">myStack();</h2>
            <div className="text-xl">
                <p>
                    I use <span className="font-black">THIS</span> && <span className="font-black">THAT</span>
                </p>
                <div className="mt-2">
                    <span className="text-2xl font-black">My stack includes:</span>
                    {stacks.map((stack) => (
                        <p key={stack} className="stack">{stack}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stack;
