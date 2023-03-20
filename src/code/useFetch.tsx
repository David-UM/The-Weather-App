import { useState, useEffect } from "react";

interface IState {
  data: any[];
  loading: boolean;
}

const useFetch = (): IState => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "0c99c7f681mshdfd884c3694f344p1b68c6jsn11ff70c8bc01",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        };

        fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", options)
          .then((response) => response.json())
          .then((response) => {
            setData(response);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
