import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const Response = await fetch("http://localhost:3000/places");
        const resData = await Response.json();
        console.log(resData);
        if (!Response.ok) {
          throw new Error("Failed to fetch places..");
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(resData.places);
          setIsFetching(false);
        });
        // setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || "Could not fetch places..." });
      }
      setIsFetching(false);
    }
    fetchPlaces();
    // console.log(availablePlaces);
    //   fetch("https://localhost:3000/places")
    //   .then((Response) => {
    //      return Response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []);

  if (error) {
    return <Error title="An error eccurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
