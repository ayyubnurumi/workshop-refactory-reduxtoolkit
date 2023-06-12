import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export const getAllPokemon = createAsyncThunk(
  "pokemon/getAllPokemon",
  async () => {
    return await axios.get("pokemon");
  }
);

export const getDetailPokemon = createAsyncThunk(
  "pokemon/getDetailPokemon",
  async (name) => {
    return await axios.get(`pokemon/${name}`);
  }
);

const initialState = {
  allPokemon: {
    count: 0,
    next: "",
    previous: "",
    results: [],
    isLoading: false,
  },
  detailPokemon: {
    species: {},
    types: [],
    weight: 0,
  },
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemon.pending, (state) => {
      state.allPokemon.isLoading = true;
    }),
      builder.addCase(getAllPokemon.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload.data;
        state.allPokemon.isLoading = false;
        state.allPokemon.count = count;
        state.allPokemon.next = next;
        state.allPokemon.previous = previous;
        state.allPokemon.results = results;
      }),
      builder.addCase(getAllPokemon.rejected, (state) => {
        state.allPokemon.isLoading = false;
      });
    builder.addCase(getDetailPokemon.pending, () => {
      // state.allPokemon.isLoading = true;
    }),
      builder.addCase(getDetailPokemon.fulfilled, (state, action) => {
        const { types, weight, species } = action.payload.data;
        state.detailPokemon.types = types;
        state.detailPokemon.weight = weight;
        state.detailPokemon.species = species;
      });
  },
});

export default pokemonSlice.reducer;
