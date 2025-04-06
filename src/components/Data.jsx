import React, { useEffect, useState } from "react";
import DataItems from "./DataItems";
import paginatedData from "../helpers/utils";
import { useSearchParams } from "react-router-dom";
import { useCountry } from "../contexts/CountryContext";
import Loading from "../ui/Loading";

//const paginatedResult = paginatedData(originalData);
function Data() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, input } = useCountry();

  console.log(data);
  const paginatedResult = paginatedData(data);

  const InputSearch = paginatedData(
    data?.filter((s) => s?.name?.startsWith(input))
  );

  let sortBy = searchParams.get("region") || "Filter by Region";

  if (sortBy === "Filter by Region") sortBy = paginatedResult;
  if (sortBy === "Africa")
    sortBy = paginatedData(data?.filter((s) => s.region === "Africa"));
  if (sortBy === "Asia")
    sortBy = paginatedData(data?.filter((s) => s.region === "Asia"));
  if (sortBy === "Americas")
    sortBy = paginatedData(data?.filter((s) => s.region === "Americas"));
  if (sortBy === "Europe")
    sortBy = paginatedData(data?.filter((s) => s.region === "Europe"));
  if (sortBy === "Oceania")
    sortBy = paginatedData(data?.filter((s) => s.region === "Oceania"));

  if (isLoading) return <Loading />;

  return <DataItems data={input ? InputSearch : sortBy} />;
}

export default Data;
