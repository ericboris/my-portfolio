import React from 'react';
import Education from './Education';

const Educations = () => {
    const educations = [
        {
            degree: "Bachelor of Computer Science",
            university: "University of Washington",
            duration: "2019 - 2021",
            gpa: "3.7/4.0",
        },
        {
            degree: "Associate of Science",
            university: "North Seattle College",
            duration: "2017 - 2019",
            gpa: "4.0/4.0",
        },

    ];

    return (
        <div className="mx-4 border">
            <div className="mt-10 mb-4">
                <h2 className="font-bold text-xl border text-orange-600">Education();</h2>
            </div>
            {educations.map((education) => (
                <Education education={education} />
            ))}
        </div>
    );
};

export default Educations;
