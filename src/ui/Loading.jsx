import styled from "styled-components";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return <Heading>Loading... Please Wait</Heading>;
}

export default Loading;
