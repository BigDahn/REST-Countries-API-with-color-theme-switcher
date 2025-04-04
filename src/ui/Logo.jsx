import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: 1.3em;
  color: var(--color-green-100);
`;
function Logo() {
  return <StyledLogo>Where in the world?</StyledLogo>;
}

export default Logo;
