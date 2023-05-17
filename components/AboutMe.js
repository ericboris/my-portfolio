import React from 'react';

const AboutMe = () => (
    <div className="flex my-5">
        <div className="flex-initial basis-1/2 mx-5 max-w-xs">
            <img src="/image01.png" alt="Profile" />
        </div>
        <div className="basis-1/2 mx-5 font-black">
            <h2 className="text-4xl text-orange-500">
                Hello, World!
            </h2>
            <p className="text-l">
                I'm Eric, a software engineer based in Seattle.
            </p>
        </div>
    </div>
);

export default AboutMe;
