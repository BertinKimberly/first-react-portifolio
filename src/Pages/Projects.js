import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import "../Styles/Projects.css"
import { ProjectList } from '../Helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal projects</h1>
      
      <div className='projectList'>
       {ProjectList.map((project,idx)=>{
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
       })}
      </div>
      
    </div>
  )
}

export default Projects
