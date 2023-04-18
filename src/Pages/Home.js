import React from 'react'
import "../Styles/Home.css"

function Home() {
  return <div className='home'>
    <div className='info'>
      <h2>Hi, I am Bertin</h2>
      <span>A software developer with passion</span>
    </div>
    <div className='skills'>
      <h2>Front-End</h2>
      <span>Html,css,React,Redux</span>
      <h2>Back-End</h2>
      <span>Nodejs, Expressjs, Mongodb,Mysql</span>
    </div>
  </div>
}

export default Home
