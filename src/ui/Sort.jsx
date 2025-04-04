import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSortBy = styled.select`
  width: 12rem;
  height: 2rem;
  background-color: var(--color-grey-0);
  border: none;
  box-shadow: 1.5px 1.5px 2px 1.5px gray;
  border-radius: 4px;
  color: var(--color-green-100);
  outline: none;
`;

function Sort({ options, FilterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("region" || "");
  console.log(sortBy);
  function handleChange(e) {
    searchParams.set(FilterField, e.target.value);
    setSearchParams(searchParams);
  }
  // console.log(options);
  //<option defaultValue="Filter By region">Filter by Region</option>
  return (
    <StyledSortBy onChange={handleChange} value={sortBy}>
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
