import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) =>  {
        response.json().then((response) => {
          setData(response)
        });
      })
  }, [url]);

  return data;
};

export default useFetch;