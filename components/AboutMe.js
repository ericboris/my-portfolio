import React from 'react';

const AboutMe = () => (
    <div className="flex my-10 mx-4 place-content-center">
        <div className="flex-initial basis-1/2 mx-4 max-w-xs">
            <img src="/image01.png" alt="Profile" />
        </div>
        <div className="basis-1/2 mx-4 font-bold">
            <h2 className="text-4xl text-orange-500">
                Hello, World!
            </h2>
            <p className="text-l">
                I&apos;m Eric, a software engineer based in Seattle, WA.
            </p>
        </div>
    </div>
);

export default AboutMe;
