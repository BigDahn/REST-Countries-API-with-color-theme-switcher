import { useEffect, useState } from "react";
import paginatedData from "../helpers/utils";

export function useCountryFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [originalData, setOriginalData] = useState();

  async function getData() {
    // Fetch data
    setIsLoading(true);
    const response = await fetch(`src/data.json`);
    console.log(response);
    const data = await response.json();
    setOriginalData(data);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  // const url = `/data.json`;

  // const response = await fetch(`src/data.json`);
  // const data = "jele";
  //const newData = await response.json();
  /*if (newData && response.status === 200) {
    setData(newData);
    setIsLoading(false);
  } */

  //;
  //console.log(originalData);
  //  if (response.status === 200) setIsLoading(false);
  //;
  //console.log(data);

  //console.log(isLoading);

  return { isLoading, originalData };
}
