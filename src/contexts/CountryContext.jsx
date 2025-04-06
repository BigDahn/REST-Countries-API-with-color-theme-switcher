import { createContext, useContext, useEffect, useState } from "react";
import paginatedData from "../helpers/utils";
import { country } from "../../data/data.json";
const CountryDataContext = createContext();

function CountryContext({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  useEffect(() => {
    setData(country);
  }, []);

  function handleInput(e) {
    setInput(e.target.value);

    //setData(data.filter((s) => s.name === e.target.value));
    //console.log(data);
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
