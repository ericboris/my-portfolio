import React from 'react';

const AboutMe = () => (
    <div className="mx-4 place-content-center">
        <div className="flex my-10 gap-4">
            <div className="max-w-[50%]">
                <img src="/image01.png" alt="Profile" />
            </div>
            <div className="font-black">
                <h2 className="text-5xl text-orange-500">
                    Hello, World!
                </h2>
                <p className="font-bold text-lg">
                    I&apos;m Eric, a software engineer based in Seattle, WA.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;
