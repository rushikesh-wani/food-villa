export function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((filterResto) =>
    filterResto?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}
