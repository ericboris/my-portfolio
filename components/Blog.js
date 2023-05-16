import React from 'react';

const Blog = () => {
    const blogs = [
    {
        title: "React vs Vue: A comparison",
        link: "https://example.com/blog/react-vs-vue",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];

    return (
        <div className="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
            <h2 className="text-4xl font-black underline">Blog();</h2>
            {blogs.map(({ title, link, description }) => (
                <div key={title} className="blogPost">
                    <h3 className="blogTitle">{title}</h3>
                    <a href={link} className="blogLink">Read More</a>
                    <p className="description">{description}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;

