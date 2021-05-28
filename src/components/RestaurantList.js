//To show our selected state
import { useSelector } from "react-redux";

//Import selector from selectors store
import { selectRestaurants } from "../store/restaurants/selectors";

export default function RestaurantList() {
  //Asign variable to selectors from pizzza store
  const restaurantList = useSelector(selectRestaurants);

  return (
    <div>
      <p>List of Restaurants</p>
      <ul>
        {restaurantList.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
