import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./feature/counter/counterSlice";
import {
  getAllPokemon,
  getDetailPokemon,
} from "./feature/pokemon/pokemonSlice";

function App() {
  const [count, setCount] = useState(0);
  const counterState = useSelector((state) => state.counter.value);
  const pokemonState = useSelector((state) => state.pokemon.allPokemon);
  const pokemonDetail = useSelector((state) => state.pokemon.detailPokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <div>Detail</div>
        <div>Species : {pokemonDetail.species.name}</div>
        <div>
          types:{" "}
          {pokemonDetail.types.map((e) => {
            return <span key={e.slot} style={{marginRight: "10px"}}>{e.type.name}</span>;
          })}
        </div>
        <div>weight: {pokemonDetail.weight}kg</div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "20px",
        }}
      >
        {pokemonState.results.map((e) => {
          return (
            <div
              key={e.url}
              style={{ border: "1px solid whitesmoke", padding: "10px 20px", flex: "1 0"}}
              onClick={() => dispatch(getDetailPokemon(e.name))}
            >
              {e.name}
            </div>
          );
        })}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ marginInline: "10px" }}>{counterState}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
