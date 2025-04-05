import styled from "styled-components";
import Logo from "./Logo";
import Theme from "./Theme";

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  //border-bottom: 1px solid gray;
  //border: none;
  //width: 100;
  //background-color: red;
  box-shadow: 1.5px 1.5px 2px -2px gray;
  // box-shadow: 2px 1px 2px gray;
  //box-shadow: 0 2px 2px -2px gray;
  //padding: 1px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //max-width: 79rem;
  //margin: auto;
  @media screen and (max-width: 600px) {
    //max-width: 40rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <Logo />
        <Theme />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
