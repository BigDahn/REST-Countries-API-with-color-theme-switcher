import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: 1.3em;
  color: var(--color-green-100);
  padding-left: 0.4em;
`;
function Logo() {
  return <StyledLogo>Where in the world?</StyledLogo>;
}

export default Logo;
