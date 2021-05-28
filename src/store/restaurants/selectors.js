//lets select the restaurans and sort by alphabetic order
export const selectRestaurants = (reduxState) => {
  //make a copy
  const copy = [...reduxState.restaurants.allRestaurants];

  //sort by name
  return copy.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};
