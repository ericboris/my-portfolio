import React from 'react';

const AboutMe = () => (
    <div className="mx-4 place-content-center">
        <div className="flex my-4 items-center gap-4 md:grid md:grid-cols-2">
            <div className="w-full md:w-11/12 object-contain">
                <img src="/image01.png" alt="Profile"/>
            </div>
            <div className="font-black md:w-11/12 object-contain">
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-orange-500">
                    Hello, World!
                </h2>
                <p className="font-bold text-lg md:text-xl lg:text-2xl">
                    I&apos;m Eric, a software engineer based in Seattle, WA.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;
