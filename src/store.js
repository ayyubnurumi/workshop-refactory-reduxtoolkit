import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import pokemonSlice from "./feature/pokemon/pokemonSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlice
  },
});

export default store;
