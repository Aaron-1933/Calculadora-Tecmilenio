import './CalcButton.css'

interface CalcButtonProps {
  label: string
  onClick: () => void
  variant?: 'number' | 'operator'
  className?: string
}

function CalcButton({ label, onClick, variant = 'number', className = '' }: CalcButtonProps) {
  return (
    <button
      className={`calc-btn calc-btn-${variant} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CalcButton
