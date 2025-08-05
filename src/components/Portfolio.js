import React from 'react'

const Portfolio = () => {
  return (
  <section className="p-5 servicios">
   <h1 className='row align-items-center'>Productos y servicios:</h1>

  <h2>1. Plataforma CliniIA Cloud (web + app):</h2>
  <ol>
    <li>Subida de imágenes médicas (radiografías, TAC, ultrasonidos)</li>
    <li>Generación automática de reportes diagnósticos</li>
  </ol>

  <h2>2. CliniIA Diagnóstico Diferencial (módulo NLP):</h2>
  <ol>
    <li>Introducción de síntomas o notas clínicas</li>
    <li>Sugerencia de diagnósticos posibles, priorizados por probabilidad</li>
  </ol>

  <h2>3. CliniIA RiskPredict:</h2>
  <ol>
    <li>Análisis predictivo de riesgo (sepsis, ECV, insuficiencia respiratoria, etc.)</li>
    <li>Alarmas tempranas con base en datos de signos vitales y antecedentes</li>
  </ol>

  <h2>4. API para integración con sistemas hospitalarios o seguros</h2>

  <h2>5. Panel de control para entidades de salud pública (epidemiología, detección de brotes)</h2>
  </section>
  )
}

export default Portfolio