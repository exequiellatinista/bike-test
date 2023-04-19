import { Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import { Home } from './pages/Home'
import { BikeForm } from './pages/BikeForm'
import { ROUTES } from './utils/constants/routes'
import { DefaultLayout } from './components/Layout/DefaultLayout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={`/${ROUTES.BIKE_FORM}/:id`} element={<BikeForm />} />
        </Route>
        <Route path="*" element={<p>404: Pagina no encontrada</p>} />
      </Routes>
    </div>
  )
}

export default App
