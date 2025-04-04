import React, { useEffect, useState } from "react";
import styled from "styled-components";
import formatNumber from "../helpers/formatNumber";
import { useNavigate } from "react-router-dom";
import PaginationNumber from "./PaginationNumber";

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
  background-color: var(--color-grey-0);
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 2px 1.5px var(--color-grey-400);
  height: 20rem;
  // background-color: red;
  width: 15rem;
  color: var(--color-green-100);
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
  console.log(data.length);
  const [newData, setNewData] = useState();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setNewData(data[page]);
    //etPage(0);
  }, [data, page]);

  function handleNext() {
    setPage((index) => (index === data.length - 1 ? 0 : index + 1));
  }

  return (
    <MainSection>
      <Main>
        {newData?.map((s) => {
          const { name, flag, population, region, capital } = s;
          //console.log(s);
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
