import React, { useState, useEffect, useCallback } from "react";

const useFetch = () => {
  const [hasError, setHasError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const retry = () => {
    fetchData();
  };

  const fetchData = useCallback(async () => {
    const options = {
      headers: {
        Authorization: process.env.REACT_APP_TRETTON_API,
      },
    };

    if (!data && !hasError) {
      try {
        console.log("Begging fetch");
        setIsLoading(true);
        const response = await fetch(
          "https://api.1337co.de/v3/employees",
          options
        );
        const parseResponse = await response.json();
        setData(parseResponse);
        setIsLoading(false);
        console.log("Fetch successful");
      } catch (e) {
        console.log("fetch failed with", e);
        setIsLoading(false);
        setHasError(e);
      }
    }
  }, [setIsLoading, setData, setHasError]);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, isLoading]);

  return [data, isLoading, hasError, retry];
};

export default useFetch;
