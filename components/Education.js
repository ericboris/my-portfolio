import React from 'react';

const Education = () => {
    const educations = [
        {
            degree: "Bachelor's in Computer Science - Data Science Option",
            university: "University of Washington",
            duration: "2015 - 2019",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            gpa: "3.7/4.0",
        },
    ];

    return (
        <div className="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">Education();</h2>
            {educations.map(({ degree, university, duration, description, gpa }) => (
                <div key={degree} className="educationDetail">
                    <h3 className="degree">{degree}</h3>
                    <p className="university">{university}</p>
                    <p className="duration">{duration}</p>
                    <p className="description">{description}</p>
                    <p className="gpa">{gpa}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;
