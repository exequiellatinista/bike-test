import { BikeTypeI } from './BikeTypeT'

export interface BikeI {
  id: string
  type: BikeTypeI | string
  name: string
  img: string
}
