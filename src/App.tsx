import { Routes, Route } from 'react-router-dom';
import "./index.css";
import './App.css'
import { Home } from './pages/Home';
import { BikeForm } from './pages/BikeForm';
function App() {

  return (
    <div className="App">
    <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="bike-form" element={<BikeForm />} />
        <Route path="*" element={<p>404: Pagina no encontrada</p>} />
    </Routes>
    </div>

  )
}

export default App
