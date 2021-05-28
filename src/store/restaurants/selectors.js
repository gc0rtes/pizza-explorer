//lets select the restaurans and sort by alphabetic order
export const selectRestaurants = (reduxState) => {
  //make a copy
  const copy = [...reduxState.restaurants.allRestaurants];

  //sort by name
  return copy.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};

/* `Parameterized Selector` to show the reastaurants that sell specific pizza
Our parameterized selector is actually a function that returns a function.
That means we will call these two selectors like this:

const restaurants = useSelector(selectRestaurants)
const restaurantsThatSellSelectedPizza = useSelector(selectRestaurantsThatSellPizza(selectedPizza))

This selector allows us to change the information we select from the state, whenever we change the selectedPizza in our select tag.
*/
export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.allRestaurants.filter((restaurant) =>
    restaurant.pizzas.includes(pizzaId)
  );
};
