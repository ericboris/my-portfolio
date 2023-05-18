import React from 'react';
import Education from './Education';

const Educations = () => {
    const educations = [
        {
            degree: "Bachelor's in Computer Science - Data Science Option",
            university: "University of Washington",
            duration: "2015 - 2019",
            gpa: "3.7/4.0",
        },
    ];

    return (
        <div className="mx-4 border">
            <div className="my-10">
                <h2 className="text-4xl font-black underline border">Education();</h2>
                {educations.map((education) => (
                    <Education education={education} />
                ))}
            </div>
        </div>
    );
};

export default Educations;
