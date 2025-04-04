import styled, { css } from "styled-components";
import { useCountry } from "../contexts/CountryContext";

const StyledNumber = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 1.5px 1.5px 2px 1.5px gray;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  ${(props) =>
    props.type === "active" &&
    css`
      //font-size: 1rem;
      color: var(--color-grey-50);
      font-weight: 600;
      background-color: #f25c54;
    `}
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  //width: 120px;
  justify-content: center;
`;
const NumberContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 0.6em;
  font-weight: 600;
  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 1.2rem;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
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
