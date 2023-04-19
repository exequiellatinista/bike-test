import { BikeTypeI } from '../../types/BikeTypeT'

interface Params {
  type: BikeTypeI | string
  duration: number
  startDate: string
}

const LIMIT_DAY = 15

export const getPrice = ({ type, duration, startDate }: Params) => {
  const date = new Date(startDate)
  const day = date.getDate()
  const basePrice = day <= LIMIT_DAY ? 10 : 15

  const calcAccordingBonusDays = (bonusDays: number) => {
    if (duration <= bonusDays) {
      return basePrice
    }
    return basePrice + (duration - bonusDays) * basePrice
  }

  const calcRules: Record<BikeTypeI, () => number> & {
    [key: string]: () => number
  } = {
    Electrica: () => duration * basePrice,
    Normal: () => calcAccordingBonusDays(3),
    Antigua: () => calcAccordingBonusDays(5),
  }
  return calcRules[type] ? calcRules[type]() : 0
}
