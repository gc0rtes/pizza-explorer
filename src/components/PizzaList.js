//To show our selected state
import { useSelector } from "react-redux";

//Import selector from selectors store. This is how we access `state`
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";

//To dispatch our actions
import { useDispatch } from "react-redux";

//Import actions
import { addFavorite } from "../store/user/actions";

export default function PizzaList() {
  //this hook must be called in the root scope of component function!
  const dispatch = useDispatch();

  //Asign variable to selectors from pizzza store
  const pizzaList = useSelector(selectPizzas);

  //Asign variable to selectors from user store
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>List of pizzas</p>
      <ul>
        {pizzaList.map((pizza) => (
          <li key={pizza.id}>
            <img
              alt={pizza.name}
              style={{
                border: "1px solid black",
                width: "200px",
                marginTop: "20px",
              }}
              src={pizza.image}
            />
            <br />
            <button
              onClick={() => {
                dispatch(addFavorite(pizza.id));
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <br />
            {pizza.name} <br />
            Bought {pizza.bought} times <br />
            Description: {pizza.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
