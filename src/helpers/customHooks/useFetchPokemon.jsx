import axios from "axios";
import React, { useEffect, useState } from "react";

export function useFetchPokemon(url, initialState, isDetails) {
  const [data, setData] = useState(initialState);
  const [pokeSpices, setPokeSpices] = useState({});

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
        if (isDetails) {
          axios.get(response?.data?.species?.url).then((result) => {
            setPokeSpices(result.data);
          });
        }
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();

  }, [url]);
  return [data, isLoading, error, pokeSpices];
}
