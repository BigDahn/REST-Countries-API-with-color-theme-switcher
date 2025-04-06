import styled from "styled-components";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NoCountry() {
  return (
    <Heading>Sorry We couldn't find what you were looking for....</Heading>
  );
}

export default NoCountry;
