import React from 'react';

const projects = [
  {
      name: "Run Buddy",
      liveURL: "https://liuyfab.github.io/run-buddy/",
      ghURL: "https://github.com/liuyfab/run-buddy",
      tech: "HTML/CSS",
      style: "run-buddy"
  },
  {
      name: "Robot Gladiators",
      liveURL: "https://liuyfab.github.io/robot-gladiators/",
      ghURL: "https://github.com/liuyfab/robot-gladiators",
      tech: "JavaScript",
      style: "robot-gladiators"
  },
  {
      name: "event survey",
      liveURL: "https://blooming-wildwood-16551.herokuapp.com/",
      ghURL: "https://github.com/liuyfab/Project2-EventSurvey",
      tech: "Node.js/Express/Sequelize/Handlebars",
      style: "fo-char-mgr"
  },
  {
      name: "weather gifinder",
      liveURL: "https://kanellakise.github.io/group1-groupProject1/",
      ghURL: "https://github.com/kanellakise/group1-groupProject1",
      tech: "Html/CSS/API",
      style: "APP"
  },
]



//This const includes all the projects in the previous array.
const Projects = () => (
  <section>
      <h2 className="section-header">Projects</h2>
          <div className="project-wrapper">
              {projects.map(project => (
                  <div className={`${project.style} project-item`} key={project.name}> 
                      <div className="project-header">
                          <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="project-title">
                              {project.name}
                          </a>
                          <a href={project.ghURL} target="_blank" rel="noopener noreferrer" className="project-github">
                              GitHub
                          </a>
                      </div>
                      <p className="project-tech">{project.tech}</p>
                  </div>
                  
              ))}
          </div>
          
  </section>
);

export default Projects;