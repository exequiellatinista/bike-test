import { BikeI } from '../types/BikeI'
import bikes from '../utils/bikes.json'

export const getAllBikes = (): Promise<BikeI[]> => {
  return new Promise<BikeI[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(bikes.bikes);
    }, 1000);
  });
}