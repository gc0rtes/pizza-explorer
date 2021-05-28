//Action conventions type: "storeName/whatItDoes"
export const addFavorite = (pizzaId) => ({
  type: "user/toggleFavorite",
  payload: pizzaId,
});
