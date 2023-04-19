import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { BikeCard } from '../components/Bike/BikeCard'

import { getAllBikes } from '../services/getAllBikes'
import { ROUTES } from '../utils/constants/routes'

import { BikeI } from '../types/BikeI'

export const Home = () => {
  const [bikes, setBikes] = useState<BikeI[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleNavigation = (id: string) => {
    navigate(`/${ROUTES.BIKE_FORM}/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBikes()
      setBikes(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) return <p>Cargando...</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-cols-max">
      <h1 className="col-span-full text-xl font-bold mb-4">
        Listado de Bicicletas
      </h1>
      {bikes.map((bike) => (
        <div key={bike.id}>
          <BikeCard bike={bike} handleClick={handleNavigation} />
        </div>
      ))}
    </div>
  )
}
