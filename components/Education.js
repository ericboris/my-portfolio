import React from 'react';

const Education = ({ education }) => {
    const degree = education.degree;
    const university = education.university;
    const duration = education.duration;
    const gpa = education.gpa;

    return (
        <div key={degree} className="border">
            <h3>{degree}</h3>
            <p>{university}</p>
            <p>{duration}</p>
            <p>{gpa}</p>
        </div>
    );
};

export default Education;
