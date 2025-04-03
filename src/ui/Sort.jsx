import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSortBy = styled.select`
  width: 12rem;
  height: 2rem;
  background-color: white;
  border: none;
  box-shadow: 1.5px 1.5px 2px 1.5px gray;
  border-radius: 4px;
`;

function Sort({ options, FilterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set(FilterField, e.target.value);
    setSearchParams(searchParams);
  }
  // console.log(options);
  //<option defaultValue="Filter By region">Filter by Region</option>
  return (
    <StyledSortBy onChange={handleChange}>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        );
      })}
    </StyledSortBy>
  );
}

export default Sort;
