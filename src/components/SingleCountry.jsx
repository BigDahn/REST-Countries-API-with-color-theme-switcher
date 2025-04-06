import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import formatNumber from "../helpers/formatNumber";
import { HiArrowLeft } from "react-icons/hi2";
import { useCountry } from "../contexts/CountryContext";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: start;
  margin-top: 2em;

  color: var(--color-green-100);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 6em;

  @media screen and (max-width: 1024px) {
    display: flex;
    gap: 1em;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  //height: 12em;
`;

const SubInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 3em;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    gap: 0.4em;
    //max-width: 24em;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em;
    //max-width: 24em;
  }
`;

const BorderCountry = styled.div`
  display: flex;
  //flex-shrink: 20px;
  gap: 0.4rem;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px 50px;
    place-content: center;
    height: 110px;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px 50px;
    place-content: center;
    height: 105px;
  }
`;
const Border = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const Languages = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const Lang = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  // background-color: red;
  height: 5px;
`;
const Paragraph = styled.p`
  font-size: 10px;
  background-color: var(--color-grey-100);
  box-shadow: 1.5px 1.5px 2px -2px gray;
  //box-shadow: 1.5px 1px 1px 1.8px #212e37;
  padding-left: 17px;
  padding-right: 17px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 3px;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 4px;
    padding-top: 4px;
    border-radius: 3px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 4px;
    padding-top: 4px;
    border-radius: 3px;
  }
  // border: 3px solid var(--color-grey-490);
`;

const Image = styled.img`
  object-fit: cover;
  width: 27em;
  height: 19em;
  //box-shadow: 1.5px 1.3px 1px 1.5px #1f2c35;
  border-radius: 2px;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15em;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 17em;
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  width: 76px;
  height: 27px;
  border: none;
  background-color: var(--color-grey-100);
  box-shadow: 1.5px 1.5px 2px -2px gray;
  //box-shadow: 1.3px 1px 1px 1.2px #1f2c35;
  border-radius: 4px;
  cursor: pointer;
  svg {
    color: var(--color-green-100);
    font-weight: 800;
    font-size: 1em;
    fill: var(--color-green-100);
    width: 25px;
  }
`;

const ButtonText = styled.h6`
  font-weight: 800;
  font-size: 0.8rem;
  color: var(--color-green-100);
`;
function SingleCountry() {
  const { data: Data } = useCountry();
  //const { originalData } = useCountryFetcher();
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    setData(Data?.filter((s) => s.name === name));
  }, [Data]);

  //const filteredName = originalData);

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>
        {" "}
        <HiArrowLeft /> <ButtonText>Back</ButtonText>
      </Button>
      <div>
        {data?.map((s) => {
          const {
            name,
            capital,
            languages,
            nativeName,
            population,
            region,
            subregion,
            topLevelDomain,
            currencies,
            borders,
          } = s;

          const borderCountry = borders?.map((s) => {
            return Data.filter((ss) => ss.alpha3Code === s);
          });

          return (
            <Div key={name}>
              <Image src={s.flag} />

              <Article>
                <h4>{name}</h4>
                <SubInfo>
                  <div>
                    <h6>
                      Native Name: <span>{nativeName}</span>
                    </h6>
                    <h6>
                      Population: <span>{formatNumber(population)}</span>
                    </h6>
                    <h6>
                      Region: <span>{region}</span>
                    </h6>
                    <h6>
                      Sub Region: <span>{subregion}</span>
                    </h6>
                    <h6>
                      Capital: <span>{capital}</span>
                    </h6>
                  </div>
                  <div>
                    <h6>
                      Top Level Domain: <span>{topLevelDomain}</span>
                    </h6>

                    {currencies.map((s) => {
                      return (
                        <h6>
                          Currencies: <span>{s.name}</span>
                        </h6>
                      );
                    })}
                    <Lang>
                      <Lang>
                        {languages.length > 1 ? (
                          <h6>Languages:</h6>
                        ) : (
                          <h6>Language:</h6>
                        )}
                        <Languages>
                          {languages.map((s) => {
                            return <h6>{s.name}</h6>;
                          })}
                        </Languages>
                      </Lang>
                    </Lang>
                  </div>
                </SubInfo>
                {borders && (
                  <Border>
                    <h6>Border Countries:</h6>
                    <BorderCountry>
                      {borderCountry?.map((border) => {
                        console.log(border);
                        return (
                          <Paragraph>
                            {border[0] ? border[0].name : border.name}
                          </Paragraph>
                        );
                      })}
                    </BorderCountry>
                  </Border>
                )}
              </Article>
            </Div>
          );
        })}
      </div>
    </Container>
  );
}

export default SingleCountry;
