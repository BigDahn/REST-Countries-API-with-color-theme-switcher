import styled, { css } from "styled-components";
import { useCountry } from "../contexts/CountryContext";

const StyledNumber = styled.div`
  background-color: var(--color-grey-100);
  border-radius: 3px;

  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  ${(props) =>
    props.type === "active" &&
    css`
      //font-size: 1rem;
      color: var(--color-green-100);
      font-weight: 600;
      box-shadow: 1.5px 1.5px 2px -2px gray;
    `}
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding-bottom: 10px;
  //width: 120px;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: flex;
    gap: 0.9rem;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;
const NumberContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    gap: 0.7rem;
    place-content: center;
    margin: auto;
  }
`;

const Paragraph = styled.p`
  font-size: 0.6em;
  font-weight: 600;
  text-align: center;
  color: var(--color-green-100);
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  width: 76px;
  height: 27px;

  font-size: 1rem;
  background-color: var(--color-grey-100);
  border-radius: 3px;
  cursor: pointer;
  color: var(--color-green-100);
  box-shadow: 1.5px 1.5px 2px -2px gray;
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 17px;

    font-size: 0.5rem;
  }
`;

function PaginationNumber({ data, onClick }) {
  const { page } = useCountry();
  console.log(data.length);
  return (
    <Div>
      {data.length > 1 && (
        <>
          <StyledButton>Prev</StyledButton>
          <NumberContainer>
            {data.map((s, i) => {
              let active = page === i;

              return (
                <StyledNumber key={i} type={active && "active"}>
                  <Paragraph>{i + 1}</Paragraph>
                </StyledNumber>
              );
            })}
          </NumberContainer>
          <StyledButton onClick={onClick}>Next</StyledButton>
        </>
      )}
    </Div>
  );
}

export default PaginationNumber;
