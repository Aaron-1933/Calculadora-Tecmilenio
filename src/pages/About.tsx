import Card from '../components/Card'
import ReturnButton from '../components/ReturnButton'
import './About.css'

function About() {
  return (
    <div className="container">
      <Card>
        <ReturnButton />
        <h1>Acerca</h1>
        <h2>Calculadora App</h2>
        <p className="about-text">
          Calculadora simple hecha con React.
          Soporta operaciones básicas: suma, resta, multiplicación y división.
        </p>
        <p className="about-text">Versión 1.0</p>
        <p className='about-text'>Autor: Aaron M. Cortez Perez</p>
        <p className='about-text'>Tecmilenio proyecto React</p>
      </Card>
    </div>
  )
}

export default About
