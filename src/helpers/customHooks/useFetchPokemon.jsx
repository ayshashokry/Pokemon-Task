import axios from "axios";
import React, { useEffect, useState } from "react";

export function useFetchPokemon(url, initialState, isDetails) {
  const [data, setData] = useState(initialState);
  const [pokeSpices, setPokeSpices] = useState({});

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const returnedData = await axios.get(url);
    try {
      setData(returnedData?.data);
      if (isDetails) {
        const returned2 = await axios.get(returnedData?.data?.species?.url);
        setPokeSpices(returned2.data);
      }
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, isLoading, error, pokeSpices];
}
