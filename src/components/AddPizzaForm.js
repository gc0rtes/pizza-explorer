import { useState } from "react";
//we dispatch our actions
import { useDispatch } from "react-redux";
//import our actions here
import { addPizza } from "../store/pizzas/actions";

export default function AddPizzaForm() {
  //this hook must be called in the root scope of component function!
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //EventeHandler - once we submit the form/input do this:
  const submit = (event) => {
    // to not refresh page
    event.preventDefault();
    console.log("AddPizzaForm: What is action addPizza:", name, description);

    //Dispatch 'addPizza' action sends the state 'name' and 'description' as payload to my reducer on store/pizzas/reducer
    dispatch(addPizza({ name, description }));

    // - clear the input fields
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
