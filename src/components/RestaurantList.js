//To show our selected state
import { useSelector } from "react-redux";

//Import selector from selectors store
import { selectRestaurants } from "../store/restaurants/selectors";
import { selectRestaurantsWithPizzas } from "../store/selectors";

export default function RestaurantList() {
  //Asign variable to selectors from pizzza store
  const restaurantList = useSelector(selectRestaurants);
  console.log("what is restaurantList:", restaurantList);
  const restaurantsWithPizzas = useSelector(selectRestaurantsWithPizzas);
  console.log("what is restaurantsWithPizzas?", restaurantsWithPizzas);
  console.log("what is ?", restaurantsWithPizzas[0].pizzas[0].name);

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
    </div>
  );
}
