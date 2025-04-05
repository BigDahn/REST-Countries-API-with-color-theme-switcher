import React from "react";

import { HiMagnifyingGlass, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import { useCountry } from "../contexts/CountryContext";

const Container = styled.div`
  max-width: 72rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: flex;
    max-width: 24em;
  }
`;

const StyledInput = styled.input`
  width: 17rem;
  border-radius: 4px;
  border: none;
  box-shadow: 1.5px 1.5px 2px -2px gray;
  height: 2.8em;
  outline: none;
  color: var(--color-green-100);
  background-color: var(--color-grey-100);
  padding-left: 3rem;

  &::placeholder {
    color: var(--color-green-100);
    font-weight: 800;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    width: 20em;
    height: 3em;
  }
`;

const Img = styled.div`
  position: relative;
  top: 3px;
  left: 2rem;
  padding-left: 0.5rem;
  & svg {
    color: var(--color-green-100);
  }
`;
function Input() {
  const { input, handleInput } = useCountry();

  console.log(input);
  return (
    <Container>
      <Img>
        <HiMagnifyingGlass />
      </Img>
      <StyledInput
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => handleInput(e)}
      />
    </Container>
  );
}

export default Input;
