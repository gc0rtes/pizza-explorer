/*
Each restaurant has an array of pizzas (an array inside an object)
1) Map over the state restaurants.allRestaurants - we gonna return the restaurant object
2) Inside the restaurant object we gonna map over the pizzas array
3) We gonna .find() the pizza Id that matches with the pizzaId from the selectPizzas selector

*/

export const selectRestaurantsWithPizzas = (reduxState) => {
  return reduxState.restaurants.allRestaurants.map((restaurant) => {
    //we gonna return an object
    return {
      //Now we gonna copy all the information of each object
      ...restaurant, //what is my object here? 'name:' and 'id:'

      //And now we gonna map into the pizza key (an array)

      //Once we have the pizza Id the next step is access the reduxState in the data of pizza store
      pizzas: restaurant.pizzas.map((pizzaId) =>
        reduxState.pizzas.allPizzas.find((pizza) => pizza.id === pizzaId)
      ),
    };
  });
};
