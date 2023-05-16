import React from 'react';

const Skills = () => {
    const skills = [
        "JavaScript", "React", "Vue", "Node.js",
    ];

    return (
        <div className="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">Skills();</h2>
                <div className="text-xl">
                {skills.map((skill) => (
                    <p key={skill} className="skill">{skill}</p>
                ))}
            </div>
        </div>
    );
};

export default Skills;

