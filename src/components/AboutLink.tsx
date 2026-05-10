import { useNavigate } from 'react-router-dom'
import './AboutLink.css'

function AboutLink() {
  const navigate = useNavigate()

  return (
    <button className="about-link" onClick={() => navigate('/about')}>
      Acerca de la app
    </button>
  )
}

export default AboutLink
