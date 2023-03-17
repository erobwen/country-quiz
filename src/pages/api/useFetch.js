import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) =>  {
        response.json().then((response) => {
          console.log(response)
          console.log("SET DATA!!!")
          setData(response)
        });
      })
  }, [url]);

  return data;
};

export default useFetch;