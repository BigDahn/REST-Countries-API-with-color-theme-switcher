import styled from "styled-components";

const StyledNumber = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 1.5px 1.5px 2px 1.5px gray;
  height: 26px;
  width: 15px;
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
  console.log(data.length);
  return (
    <Div>
      <StyledButton>Prev</StyledButton>
      <NumberContainer>
        {data.map((s, i) => {
          return (
            <StyledNumber key={i}>
              <Paragraph>{i + 1}</Paragraph>
            </StyledNumber>
          );
        })}
      </NumberContainer>
      <StyledButton onClick={onClick}>Next</StyledButton>
    </Div>
  );
}

export default PaginationNumber;
