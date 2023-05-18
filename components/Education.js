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
        <div className="mx-4 border">
            <div className="my-10">
                <h2 className="text-4xl font-black underline border">Education();</h2>
                {educations.map(({ degree, university, duration, description, gpa }) => (
                    <div key={degree} className="border">
                        <h3>{degree}</h3>
                        <p>{university}</p>
                        <p>{duration}</p>
                        <p>{description}</p>
                        <p>{gpa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
