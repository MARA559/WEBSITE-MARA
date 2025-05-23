import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of Project One',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Description of Project Three',
      link: '#',
    },
  ];

  return (
    <div className="portfolio">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-800">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline mt-2 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;