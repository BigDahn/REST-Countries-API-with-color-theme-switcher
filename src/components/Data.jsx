import React, { useEffect, useState } from "react";
import DataItems from "./DataItems";
import { useCountryFetcher } from "../hooks/useCountryFetcher";
import paginatedData from "../helpers/utils";
import { useSearchParams } from "react-router-dom";

//const paginatedResult = paginatedData(originalData);
function Data() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, originalData } = useCountryFetcher();
  const paginatedResult = paginatedData(originalData);
  console.log(originalData);

  let sortBy = searchParams.get("region") || "Filter by Region";

  if (sortBy === "Filter by Region") sortBy = paginatedResult;
  if (sortBy === "Africa")
    sortBy = paginatedData(originalData?.filter((s) => s.region === "Africa"));
  if (sortBy === "Asia")
    sortBy = paginatedData(originalData?.filter((s) => s.region === "Asia"));
  if (sortBy === "Americas")
    sortBy = paginatedData(
      originalData?.filter((s) => s.region === "Americas")
    );
  if (sortBy === "Europe")
    sortBy = paginatedData(originalData?.filter((s) => s.region === "Europe"));
  if (sortBy === "Oceania")
    sortBy = paginatedData(originalData?.filter((s) => s.region === "Oceania"));
  //console.log(sortBy);
  let d = originalData?.filter((s) => s.name === "Algeria");
  console.log(d);
  if (isLoading) return "Loading...";

  return <DataItems data={sortBy} />;
}

export default Data;
