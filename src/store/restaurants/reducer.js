const initialState = {
  allRestaurants: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [2, 3],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [1],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [3, 1],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [1, 2],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
