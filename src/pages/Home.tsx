import React, { useEffect, useState } from "react"
import { BikeI } from "../types/BikeI"
import { getAllBikes } from "../services/getAllBikes"
export const Home = () => {

  const [bikes, setBikes] = useState<BikeI[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBikes();
      setBikes(data);
      setIsLoading(false)
    };
    fetchData();
  }, []);
  if(isLoading) return <p>Cargando...</p>
  return (
    <div>
      <h1>Bicicletas</h1>
      {bikes.map((bike) => (
        <div key={bike.id}>
          <p>{bike.name}</p>
          <p>{bike.type}</p>
          <img src="https://picsum.photos/200/300"></img>
        </div>
      ))}
    </div>
  );
}