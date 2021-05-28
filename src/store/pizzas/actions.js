//ref: https://reader.codaisseur.com/courses/redux/20-redux-2/20-pizza-explorer/30-add-pizza

//Action conventions type: "storeName/whatItDoes"
export const addPizza = ({ name, description }) => ({
  type: "pizzas/add",
  payload: {
    name,
    description,
    id: parseInt(Math.random() * 100),
  },
});
