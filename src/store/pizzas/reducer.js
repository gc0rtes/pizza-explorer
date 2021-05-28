/*
Here is my reducers stores, where I say what is my `initialState` and what my  actions must do!
Here we transforms a state object and an action to a new state object.
Each reducers here is called `slice reducers` or `slice`
The global state is actually managed by a `root reducer` by function called `combineReducers` inside /store/index.js
*/

//obs: we put our allPizzas list [array] inside an object {} to allow modify it later on
const initialState = {
  allPizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-500x500.jpg",
    },
    {
      id: 2,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 3,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "pizzas/add": {
      console.log("action add", action);
      return {
        ...state, //spread state
        //choose the key inside initialState
        allPizzas: [
          //Inside array is the same logic my examples_test
          //And I need to return an array in this case
          ...state.allPizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
}
