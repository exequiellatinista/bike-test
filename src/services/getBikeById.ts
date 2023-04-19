import { BikeI } from '../types/BikeI'
import bikes from '../utils/mocks/bikes.json'

export const getBikeById = ({
  id,
}: {
  id: BikeI['id']
}): Promise<BikeI | undefined> => {
  return new Promise<BikeI | undefined>((resolve) => {
    setTimeout(() => {
      const currentBike: BikeI | undefined = bikes.list.find(
        (bike) => bike.id === id
      )
      resolve(currentBike)
    }, 1000)
  })
}
