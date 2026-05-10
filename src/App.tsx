import { Routes, Route} from "react-router-dom";
import Login from './pages/Login'
import Calculator from './pages/Calculator'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App