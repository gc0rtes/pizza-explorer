//pizzas come from `src/store/index.js` and allPizzas from `src/store/pizzas/reducer.js`

//Select pizzas
// export const selectPizzas = (reduxState) => reduxState.pizzas.allPizzas;

//sorted by most bought pizzas
export const selectPizzas = (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas]; //make a copy
  //sorting by bought parameter
  return clonedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};

//Most bought pizzas
export const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.allPizzas.length === 0) {
    return null;
  }
  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};
