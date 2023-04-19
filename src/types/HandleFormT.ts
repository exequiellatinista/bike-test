import { BikeFormI } from "./BikeFormI";

export type HandleFormType = ({
  duration,
  startDate,
  name,
  email,
  phone,
}: BikeFormI) => void