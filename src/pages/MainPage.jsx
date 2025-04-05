import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Sort from "../ui/Sort";
import { useCountryFetcher } from "../hooks/useCountryFetcher";
import { useSearchParams } from "react-router-dom";
import Data from "../components/Data";

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 77rem;
  @media screen and (max-width: 600px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    //background-color: aliceblue;
    align-items: center;
    gap: 1em;
    justify-content: center;
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: space-between;
  justify-content: center;

  //max-width: 72rem;
`;
function MainPage() {
  /*const [isLoading, setIsLoading] = useState(false);
  const [originalData, setOriginalData] = useState();
  async function getData() {
    // Fetch data
    setIsLoading(true);
    const response = await fetch(`src/data.json`);
    const data = await response.json();
    setOriginalData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []); */

  const { originalData, isLoading } = useCountryFetcher();
  //console.log(originalData, isLoading);
  let d = originalData?.filter((s) => s.region === "Asia");

  return (
    <Main>
      <StyledContainer>
        <Input />
        <Sort
          FilterField="region"
          options={[
            { value: "Filter by Region", label: "Filter by Region" },
            { value: "Africa", label: "Africa" },
            { value: "Americas", label: "America" },
            { value: "Asia", label: "Asia" },
            { value: "Europe", label: "Europe" },
            { value: "Oceania", label: "Oceania" },
          ]}
        />
      </StyledContainer>
      <Data />
    </Main>
  );
}

export default MainPage;
