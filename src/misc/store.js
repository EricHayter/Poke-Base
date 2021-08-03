import { createStore } from "redux";

const initialState = {
  search: "",
  pokemon: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.search,
      };
    case "POKEMON":
      return {
        ...state,
        pokemon: action.pokemon,
      };
    default:
      return state;
  }
};

const searchAction = (text) => ({ type: "SEARCH", search: text });
// const setPokemon = (name) => ({ type: "POKEMON", pokemon: name });

const store = createStore(searchReducer);

// const mapStateToProps = (state) => {
//   return { pokemon: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newSearch: (text) => {
//       dispatch(searchAction(text));
//     },
//     setPokemon: (name) => {
//       dispatch(setPokemon(name));
//     },
//   };
// };

export { store, searchAction };
