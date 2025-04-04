import { createContext, useContext, useEffect, useState } from "react";
import paginatedData from "../helpers/utils";

const CountryDataContext = createContext();

function CountryContext({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  async function getData() {
    // Fetch data
    setIsLoading(true);
    const response = await fetch(`src/data.json`);
    console.log(response);
    const result = await response.json();
    console.log(result);
    setData(result);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <CountryDataContext.Provider
      value={{
        data,
        isLoading,
        setIsLoading,
        page,
        setPage,
      }}
    >
      {children}
    </CountryDataContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountryDataContext);
  if (context === undefined) throw new Error("");
  return context;
}

export { useCountry, CountryContext };
