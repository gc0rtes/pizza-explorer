//To show our selected state
import { useSelector } from "react-redux";

//Import useState to store User Interface logic
import { useState } from "react";

//Import selector from selectors store
// import { selectRestaurants } from "../store/restaurants/selectors"; This was used to sort alphabetically
import { selectRestaurantsWithPizzas } from "../store/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";

export default function RestaurantList() {
  //Asign variable to selectors from pizzza store
  // const restaurantList = useSelector(selectRestaurants);
  // console.log("what is restaurantList:", restaurantList);
  const restaurantsWithPizzas = useSelector(selectRestaurantsWithPizzas);
  // console.log("what is restaurantsWithPizzas?", restaurantsWithPizzas);
  // console.log("what is ?", restaurantsWithPizzas[0].pizzas[0].name);

  const pizzas = useSelector(selectPizzas);
  console.log("what is pizzas?", pizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);

  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  return (
    <div>
      <p>List of Restaurants</p>
      <ul>
        {restaurantsWithPizzas.map((restaurant) => (
          <li key={restaurant.id}>
            <b>{restaurant.name}</b>
            <ul>
              {restaurant.pizzas.map((pizza) => (
                <li key={pizza.id}>{pizza.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
      <ul>
        {restaurantsThatSellSelectedPizza.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
