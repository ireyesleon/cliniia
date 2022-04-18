import React from 'react'

const About = () => {
  return (
    <div className='row m-5 mt-5'>
      <img className='col-6 mb-4' id="profile-pic" src={require('.././assets/images/profile.jpeg')} alt="Profile" />
      <p className='col-12'>My name is Isaias Reyes, I'm from Culiacán Sinaloa and I studied Marketing at Universidad de Occidente. My hobbies are very varied, from video games, learn new things, photography and exercising (and of course Web Development!), to traveling through the different landscapes that Mexico offers. I have 8+ years of experience working in IT.</p>
      <p className='col-12'>I started coding last year as part of my personal and professional growth. I have always wanted to learn how to code since I work for the IT Industry and I have seen how important it is no matter what your major was in collage. I have worked with different web technologies like Javascript, NodeJS, MongoDB, React and many others that made me realize that I can achieve great things with just my computer.</p>
      
    </div>
  )
}

export default About