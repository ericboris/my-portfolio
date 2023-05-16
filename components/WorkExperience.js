import React from 'react';

const WorkExperience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "ABC Corporation",
            duration: "Jan 2020 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    return (
        <div className="bg-raisin-black shadow py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">WorkExperience();</h2>
            {experiences.map(({ title, company, duration, description }) => (
                <div key={title} className="experience">
                    <h3 className="role">{title}</h3>
                    <p className="company">{company}</p>
                    <p className="duration">{duration}</p>
                    <p className="description">{description}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
