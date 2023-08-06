import React from 'react'
import { ProjectsData } from '../../models'

interface ProjectsProps {
  projects: ProjectsData
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-highlights-block">
      {projects.map((project, index) => {
        return (
          <div className="project" key={index}>
            <div className="rest">
              <div className="title-dates">
                <div className="project-title">{project.title}</div>
                <div className="dates-duration">
                  {project.dates}
                  <br />
                  {project.duration}
                </div>
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>
            </div>
            <div className="marker">
              <img src="./assets/ellipse.svg" alt="marker" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
