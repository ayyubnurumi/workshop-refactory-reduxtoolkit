import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import pokemonSlice from "./feature/pokemon/pokemonSlice";

const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    counter: counterReducer,
    pokemon: pokemonSlice
  },
});

export default store;
