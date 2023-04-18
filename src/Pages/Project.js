import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../Helpers/ProjectList';

function Project() {
    const {id}=useParams();
    const project=ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image}/>
    </div>
  )
}

export default Project
