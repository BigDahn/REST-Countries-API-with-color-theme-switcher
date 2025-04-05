import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLayout = styled.main`
  //max-width: 79rem;
  display: grid;
  gap: 1em;

  margin: auto;
  @media screen and (max-width: 600px) {
  }
`;
const Div = styled.div`
  //max-width: 100rem;
  max-width: 79rem;
  //background-color: purple;
  margin: auto;
  @media screen and (max-width: 600px) {
    max-width: 20em;
    //margin: auto;
  }
`;
function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Div>
        <Outlet />
      </Div>
    </StyledLayout>
  );
}

export default AppLayout;
