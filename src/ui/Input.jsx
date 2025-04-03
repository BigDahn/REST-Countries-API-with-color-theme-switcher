import React from "react";

import { HiMagnifyingGlass, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  max-width: 72rem;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 17rem;
  border-radius: 4px;
  border: none;
  box-shadow: 1.5px 1.5px 2px 1.5px gray;
  height: 2rem;
  padding-left: 3rem;

  &::placeholder {
    color: black;
  }
`;

const Img = styled.div`
  position: relative;
  top: 3px;
  left: 2rem;
  padding-left: 0.5rem;
  & svg {
    color: black;
  }
`;
function Input() {
  return (
    <Container>
      <Img>
        <HiMagnifyingGlass />
      </Img>
      <StyledInput type="text" placeholder="Search for a country..." />
    </Container>
  );
}

export default Input;
