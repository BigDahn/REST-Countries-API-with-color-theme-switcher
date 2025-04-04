import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountryFetcher } from "../hooks/useCountryFetcher";
import styled from "styled-components";
import formatNumber from "../helpers/formatNumber";
import { HiArrowLeft } from "react-icons/hi2";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: start;
  margin-top: 2em;
  color: var(--color-green-100);
`;

const Div = styled.div`
  display: flex;
  gap: 6em;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SubInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 3em;
  justify-content: center;
`;

const BorderCountry = styled.div`
  display: flex;
  flex-shrink: 20px;
  gap: 0.4rem;
`;
const Border = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
  height: 15px;
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
  // border: 3px solid var(--color-grey-490);
`;

const Image = styled.img`
  object-fit: cover;
  width: 27em;
  height: 19em;
  //box-shadow: 1.5px 1.3px 1px 1.5px #1f2c35;
  border-radius: 2px;
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
  const { originalData } = useCountryFetcher();
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    setData(originalData?.filter((s) => s.name === name));
  }, [originalData]);

  console.log(originalData);
  //const filteredName = originalData);

  console.log(data);

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
          console.log(borders);
          const sp = borders?.map((s) => {
            return originalData.filter((ss) => ss.alpha3Code === s);
          });
          console.log(sp);

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
                      {sp?.map((border) => {
                        console.log(border);
                        return <Paragraph>{border[0].name}</Paragraph>;
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
