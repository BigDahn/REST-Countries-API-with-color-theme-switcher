import React, { useEffect, useState } from "react";
import styled from "styled-components";
import formatNumber from "../helpers/formatNumber";
import { useNavigate, useSearchParams } from "react-router-dom";
import PaginationNumber from "./PaginationNumber";
import { useCountry } from "../contexts/CountryContext";

const Main = styled.main`
  display: grid;
  grid-template-columns: auto auto auto auto;
  //grid-template-rows: auto auto auto auto;
  gap: 5em;
  place-content: center;
  //max-width: 1200px;
  //padding-left: 3rem;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Section = styled.section`
  background-color: var(--color-grey-100);
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 2px -2px gray; //var(--color-grey-100);
  height: 20rem;
  // background-color: red;
  width: 15rem;
  color: var(--color-green-100);
  cursor: pointer;
`;
const Img = styled.img`
  object-fit: cover;
  width: 240px;
  height: 170px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Div = styled.div`
  //text-align: justify;
  padding-left: 1em;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 2em;
  //max-width: 1200px;
  align-items: end;
`;
const H1 = styled.h1`
  font-size: 12px;
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 11px;
  font-weight: 400;
`;

const Span = styled.span`
  font-weight: 600;
`;

const StyledButton = styled.div`
  display: flex;
  border: 1px thin black;
  gap: 2rem;
  background-color: red;
`;
function DataItems({ data = {} }) {
  const [searchParams] = useSearchParams();
  const { page, setPage } = useCountry();
  const [newData, setNewData] = useState();
  const navigate = useNavigate();
  let sortBy = searchParams.get("region");

  useEffect(() => {
    setNewData(data[page]);
  }, [data, page]);

  //resets the page number when sortBy changes
  useEffect(() => {
    setPage(0);
  }, [sortBy]);

  function handleNext() {
    setPage((index) => (index === data.length - 1 ? 0 : index + 1));
  }

  return (
    <MainSection>
      <Main>
        {newData?.map((s) => {
          const { name, flag, population, region, capital } = s;

          return (
            <Section
              role="button"
              key={name}
              onClick={() => navigate(`/${name}`)}
            >
              <Img src={flag} />
              <Div>
                <H1>{name}</H1>
                <Paragraph>
                  <Span>Population</Span>: {formatNumber(population)}
                </Paragraph>
                <Paragraph>
                  <Span>Region</Span>: {region}
                </Paragraph>
                <Paragraph>
                  <Span>Capital</Span>: {capital}
                </Paragraph>
              </Div>
            </Section>
          );
        })}
      </Main>
      <PaginationNumber data={data} onClick={handleNext} />
    </MainSection>
  );
}

export default DataItems;
