import React from 'react';

const AboutMe = () => (
    <div className="mx-4 border place-content-center">
        <div className="flex my-10 gap-4 border">
            <div className="max-w-[50%] border">
                <img src="/image01.png" alt="Profile" />
            </div>
            <div className="font-black border">
                <h2 className="text-4xl text-orange-500">
                    Hello, World!
                </h2>
                <p className="font-semibold text-base">
                    I&apos;m Eric, a software engineer based in Seattle, WA.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;
