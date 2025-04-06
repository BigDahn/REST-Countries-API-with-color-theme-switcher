import styled from "styled-components";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green-100);
`;

function NoCountry() {
  return (
    <Heading>Sorry We couldn't find what you were looking for....</Heading>
  );
}

export default NoCountry;
