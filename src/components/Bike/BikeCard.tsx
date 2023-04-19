import { BikeI } from '../../types/BikeI'

interface Params {
  bike: BikeI
  handleClick?: (id: BikeI['id']) => void
}

export const BikeCard = ({ bike, handleClick }: Params) => {
  return (
    <div
      key={bike.id}
      className={`flex flex-col justify-center items-center p-4${
        handleClick ? ' cursor-pointer' : ''
      } h-96 w-56`}
      onClick={() => {
        handleClick && handleClick(bike.id)
      }}
    >
      <p>{bike.name}</p>
      <p>Tipo {bike.type}</p>
      <img src={bike.img} alt={bike.name}></img>
    </div>
  )
}
