export default function paginatedData(data = {}) {
  // console.log(data);
  const Num_Of_ItemsPerPage = 20;
  const pages = Math.ceil(data.length / Num_Of_ItemsPerPage);
  let paginatedResult = Array.from({ length: pages }, (_, index) => {
    const start = index * Num_Of_ItemsPerPage;
    return data.slice(start, start + Num_Of_ItemsPerPage);
  });
  //console.log(paginatedResult);
  return paginatedResult;
}
