import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  gap: 0.4rem;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  padding-left: 1em;
  padding-right: 1em;

  &:hover {
    background-color: red;
  }
`;

const StyledText = styled.h3`
  font-size: 0.9em;
  font-weight: 800;
`;
function Theme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      {isDark ? (
        <StyledButton>
          <HiOutlineMoon size={30} />
          <StyledText>Dark Mode</StyledText>
        </StyledButton>
      ) : (
        <StyledButton>
          <HiOutlineSun size={30} />
          <StyledText>Light Mode</StyledText>
        </StyledButton>
      )}
    </div>
  );
}

export default Theme;
