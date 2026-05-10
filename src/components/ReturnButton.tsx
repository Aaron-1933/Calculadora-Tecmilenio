import { useNavigate } from "react-router-dom";
import './ReturnButton.css'

interface ReturnButtonProps {
    text?: string
}

function ReturnButton({ text = 'Volver' }: ReturnButtonProps) {
    const navigate = useNavigate()

    return (
        <button className="return-button" onClick={() => navigate(-1)}>
            ← {text}
        </button>
    )
}

export default ReturnButton
