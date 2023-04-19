import { BikeI } from '../types/BikeI'
import bikes from '../utils/mocks/bikes.json'

export const getAllBikes = (): Promise<BikeI[]> => {
  return new Promise<BikeI[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(bikes.list)
    }, 1000)
  })
}
