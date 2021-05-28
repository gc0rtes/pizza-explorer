const initialState = {
  name: "Helva",
  id: 42,
  favorites: [1, 2],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      console.log("toggleFavorite", action.payload);
      const id = action.payload;

      const favorites = state.favorites.includes(id) // check if we already have it
        ? state.favorites.filter((pizzaId) => pizzaId !== id) // keeping the diferent ones and return a new array
        : [...state.favorites, id]; // add
      return {
        ...state,
        favorites,
      };
    }

    default: {
      return state;
    }
  }
}

/*
Example:
const posts = [{ id: 1, title: 'some title', read: true }, { id: 2, title: 'some title', read: true }, { id: 3, title: 'some title', read: false }]
const postsRead = posts.filter(post => post.read === true)
keep just read == true
*/
