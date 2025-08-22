import React from 'react';

const About = () => {
  return (
    <div className='container-fluid p-5 pt-5 main'>
      <div className='row align-items-center mb-5'>
        {/* Left Side: Image */}
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <img
            className='col-12 mx-auto d-block about-img'
            src={require('../assets/images/centro-salud.jpg')}
            alt="Centro de salud"
          />
        </div>

        {/* Right Side: Text */}
        <div className='col-12 col-md-6 about-text'>
          <p>
            En muchos países, especialmente en zonas rurales o con recursos limitados, existe una falta de acceso oportuno a diagnósticos médicos precisos, lo cual retrasa tratamientos, eleva costos y aumenta complicaciones. Además, la sobrecarga en hospitales y centros médicos provoca demoras en la lectura de estudios como radiografías, tomografías o análisis clínicos que pueden tener consecuencias graves.
          </p>
          <p>
            Tecnología médica basada en Inteligencia Artificial (HealthTech/MedTech) especializada en diagnóstico automatizado e inteligente de enfermedades mediante análisis de imágenes médicas y datos clínicos.
          </p>
          <p className="fw-bold">Misión:</p>
          <p>
            Democratizar el acceso a diagnósticos médicos de calidad mediante inteligencia artificial, acortando tiempos, reduciendo errores y mejorando los resultados clínicos, especialmente en comunidades desatendidas.
          </p>
          <p className="fw-bold">Visión:</p>
          <p>
            Ser la plataforma líder de diagnóstico médico inteligente en América Latina y otras regiones con acceso limitado, revolucionando la forma en que se detectan y tratan las enfermedades a nivel global.
          </p>
        </div>
      </div>

      <div className='about-text'>
        <p>
          Tecnología médica basada en Inteligencia Artificial (HealthTech/MedTech) especializada en diagnóstico automatizado e inteligente de enfermedades mediante análisis de imágenes médicas y datos clínicos. 
        </p>
        <p>
          Startup tecnológica con enfoque escalable. Empezando con un equipo de desarrollo IA, médicos consultores, personal técnico y alianzas estratégicas con 2–3 instituciones de salud piloto. 
        </p>
      </div>
    </div>
  )
}

export default About;