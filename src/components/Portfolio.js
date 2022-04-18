import React from 'react'

const Portfolio = () => {
  return (
  <section className="row title">
    <h1 className="d-flex justify-content-center mb-5 mt-3">My portfolio</h1>
    <div className="col-12 col-sm-6">
      <p className="d-flex justify-content-center">ü meet App<a href="https://github.com/csancheze/u-meet" className="bi bi-github"> </a></p>
       <a href="https://u-meet-app.herokuapp.com/"><img src={require('.././assets/images/umeet.png')} alt="ü meet app" /></a> 
    </div>
    <div className="col-12 col-sm-6">
    <p className="d-flex justify-content-center">Yumi Yumi App<a href="https://github.com/ireyesleon/Project-Yumi-Yumi" className="bi bi-github"> </a></p>
       <a href="https://ireyesleon.github.io/Project-Yumi-Yumi/"><img src={require('.././assets/images/yumi-yumi.png')} alt="Yumi Yumi App" /></a>
    </div>   
    <div className="col-12 col-sm-6">
    <p className="d-flex justify-content-center">Workday Scheduler<a href="https://github.com/ireyesleon/Workday-Scheduler" className="bi bi-github"> </a></p>
       <a href="https://ireyesleon.github.io/Workday-Scheduler/"><img src={require('.././assets/images/Scheduler.png')} alt="Scheduler app" /></a>
    </div>
    <div className="col-12 col-sm-6">
    <p className="d-flex justify-content-center">Weather Dashboard<a href="https://github.com/ireyesleon/Weather-Dashboard" className="bi bi-github"> </a></p>
       <a href="https://ireyesleon.github.io/Weather-Dashboard/"><img src={require('.././assets/images/weather.png')} alt="Weather Dashboard" /></a> 
    </div>
    <div className="col-12 col-sm-6">
    <p className="d-flex justify-content-center">E-commerce Back End<a href="https://github.com/ireyesleon/E-Commerce-Back-End" className="bi bi-github"> </a></p>
       <a href="https://github.com/ireyesleon/E-Commerce-Back-End"><img src={require('.././assets/images/e-commerce.png')} alt="E-commerce Back End" /></a>
    </div>
    <div className="col-12 col-sm-6">
    <p className="d-flex justify-content-center">Employee Tracker<a href="https://github.com/ireyesleon/Employee-Tracker-App" className="bi bi-github"> </a></p>
       <a href="https://github.com/ireyesleon/Employee-Tracker-App"><img src={require('.././assets/images/employee-tracker.png')} alt="Scheduler app" /></a>
    </div>
  </section>
  )
}

export default Portfolio