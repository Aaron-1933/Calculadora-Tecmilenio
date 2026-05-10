import './SocialButton.css'

interface SocialButtonProps {
  icon: string
  alt: string
  onClick?: () => void
}

function SocialButton({icon, alt, onClick }: SocialButtonProps) {
  return (
    <button className="social-btn" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  )
}

export default SocialButton