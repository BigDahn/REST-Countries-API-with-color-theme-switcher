import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeToggle";

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  gap: 0.6rem;

  background-color: var(--color-grey-0);
  border-radius: 4px;
  cursor: pointer;
  padding-left: 0.5em;
  padding-right: 0.5em;

  svg {
    //</ThemeContext> background-color: red;
    color: var(--color-green-100);
    font-weight: 800;
    fill: var(--color-green-100);
  }
`;

const StyledText = styled.h3`
  font-size: 0.9em;
  font-weight: 800;
  color: var(--color-green-100);
`;
function Theme() {
  const { darkTheme, handleTheme } = useTheme();
  return (
    <div>
      <StyledButton onClick={handleTheme}>
        {darkTheme ? (
          <>
            <HiOutlineSun size={20} />
            <StyledText>Light Mode</StyledText>
          </>
        ) : (
          <>
            <HiOutlineMoon size={20} />
            <StyledText>Dark Mode</StyledText>
          </>
        )}
      </StyledButton>
    </div>
  );
}

export default Theme;
