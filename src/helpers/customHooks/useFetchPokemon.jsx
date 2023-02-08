import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetchPokemon(url, initialState) {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    await axios
      .get(url)
      .then((response) => {
        setData(response?.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    let cleanup = false;
    // fetchData();
    return () => {
      cleanup = true;
    };
  }, [url]);
  return [data, fetchData, loading, error];
}
