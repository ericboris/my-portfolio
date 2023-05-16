import React from 'react';

const References = () => {
    const references = [
        {
            name: "John Doe",
            title: "Manager at XYZ",
            contact: "john.doe@example.com"
        },
    ];

    return (
        <div className="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
        <h2 className="text-4xl font-black underline">References();</h2>
            {references.map(({ name, title, contact }) => (
                <div key={name} className="reference">
                    <p className="referenceName">{name}</p>
                    <p className="referenceTitle">{title}</p>
                    <p className="referenceContact">{contact}</p>
                </div>
            ))}
        </div>
    );
};

export default References;
