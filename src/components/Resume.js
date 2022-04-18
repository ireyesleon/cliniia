import React from 'react'
// import resume from '../assets/IsaiasReyesLeonResume.pdf'

function Resume() {
  return (
    <div className='m-5'>
        <h1>My Resume</h1>
        <a href='../assets/IsaiasReyesLeonResume.pdf' download>Download</a>
        <div className='row d-flex justify-content-center mt-4'>
        <h1 className='mb-3'>Proficiencies:</h1>
        <div className='col-12 col-sm-3'>
        <h2>Frond End</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Ionic</li>
        </ul>
        </div>
        <div className='col-12 col-sm-3'>
        <h2>Back End</h2>
        <ul>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Express</li>
        </ul>
        </div>
        <div className='col-12 col-sm-3'>
        <h2>Frameworks</h2>
        <ul>
          <li>Bootstrap</li>
          <li>Ionic</li>
          <li>React</li>
          <li>Object Oriented Programming</li>
          <li>MVC</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Resume