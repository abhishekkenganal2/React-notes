// import { useEffect } from "react";
// import { useState } from "react";
import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

const reqConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');

  //     if (!response.ok) {
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);
  
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals',reqConfig,[]);

  if(isLoading) {
    return <p className="center">Returning meals...</p>
  }

  if(error){
    return <Error title="Failed to execute..." message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
