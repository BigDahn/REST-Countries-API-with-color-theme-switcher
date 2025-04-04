import { createContext, useContext, useEffect, useState } from "react";
import paginatedData from "../helpers/utils";

const CountryDataContext = createContext();

function CountryContext({ children }) {
  const [data, setData] = useState();
  const [Dated, setDated] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");

  async function getData() {
    // Fetch data
    setIsLoading(true);
    const response = await fetch(`src/data.json`);
    const result = await response.json();
    setData(result);
    setDated(result);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleInput(e) {
    setInput(e.target.value);

    //setData(data.filter((s) => s.name === e.target.value));
    //console.log(data);
    setDated(data.filter((s) => s.name.startsWith(input)));
  }

  //console.log(data.filter((s) => s.name.startsWith(input)));
  //"));
  return (
    <CountryDataContext.Provider
      value={{
        data,
        isLoading,
        setIsLoading,
        page,
        setPage,
        input,
        handleInput,
        Dated,
        setDated,
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
