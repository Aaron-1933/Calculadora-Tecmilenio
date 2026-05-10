import { useState } from 'react'
import Card from '../components/Card'
import CalcButton from '../components/CalcButton'
import AboutLink from '../components/AboutLink'
import ReturnButton from '../components/ReturnButton'
import './Calculator.css'

function Calculator() {
  const [expression, setExpression] = useState('')

  const handlePress = (value: string) => {
    setExpression((prev) => (prev === 'Error' ? value : prev + value))
  }

  const handleEquals = () => {
    try {
      const result = eval(expression)
      setExpression(String(result))
    } catch {
      setExpression('Error')
    }
  }

  const handleClear = () => {
    setExpression('')
  }

  return (
    <div className="container">
      <Card>
        <ReturnButton />
        <h1>numeros</h1>

        <div className="display">{expression || '0'}</div>

        <div className="keypad">
          <CalcButton label="7" onClick={() => handlePress('7')} />
          <CalcButton label="8" onClick={() => handlePress('8')} />
          <CalcButton label="9" onClick={() => handlePress('9')} />
          <CalcButton label="+" variant="operator" onClick={() => handlePress('+')} />

          <CalcButton label="4" onClick={() => handlePress('4')} />
          <CalcButton label="5" onClick={() => handlePress('5')} />
          <CalcButton label="6" onClick={() => handlePress('6')} />
          <CalcButton label="-" variant="operator" onClick={() => handlePress('-')} />

          <CalcButton label="1" onClick={() => handlePress('1')} />
          <CalcButton label="2" onClick={() => handlePress('2')} />
          <CalcButton label="3" onClick={() => handlePress('3')} />
          <CalcButton label="*" variant="operator" onClick={() => handlePress('*')} />

          <CalcButton label="C" onClick={handleClear} className="calc-btn-clear" />
          <CalcButton label="0" onClick={() => handlePress('0')} className="calc-btn-zero" />
          <CalcButton label="=" variant="operator" onClick={handleEquals} className="calc-btn-equals" />
          <CalcButton label="/" variant="operator" onClick={() => handlePress('/')} className="calc-btn-divide" />
        </div>

        <AboutLink />
      </Card>
    </div>
  )
}

export default Calculator
