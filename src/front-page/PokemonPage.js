import React from "react";
import urlFixer from "./utilFunctions";
import { useParams } from "react-router-dom";
import { pokemonData } from "../db.js";
import "../App.css";

const PokemonPage = (props) => {
  let { id } = useParams();
  const pokemon = pokemonData.filter((pokemon) => pokemon.name === id)[0];

  return (
    <div className={"container"}>
      <div className={"infoPageTitle"}>
        <h1>
          {pokemon.name}
          {pokemon.is_legendary === 1 ? " 🔥" : ""}
          {" #" + pokemon.pokedex_number}
        </h1>
        <h3>{pokemon.classfication}</h3>
      </div>

      <div>
        <img
          className={"infoPagePicture"}
          src={`https://img.pokemondb.net/artwork/large/${urlFixer(
            pokemon.name
          )}.jpg`}
          alt={pokemon.name}
        ></img>
        <h3 className={pokemon.type1}>{pokemon.type1.toUpperCase()}</h3>
        <h3 className={pokemon.type2}>{pokemon.type2.toUpperCase()}</h3>
      </div>

      <div>
        <h2>Combat Stats</h2>
        <p><span className={"statName"}>HP:</span> {pokemon.hp}</p>
        <p><span className={"statName"}>Attack:</span> {pokemon.attack}</p>
        <p><span className={"statName"}>Defense:</span> {pokemon.defense}</p>
        <p><span className={"statName"}>Sp. Atk:</span> {pokemon.sp_attack}</p>
        <p><span className={"statName"}>Sp. Def:</span> {pokemon.sp_defense}</p>
        <p><span className={"statName"}>Speed:</span> {pokemon.speed}</p>
      </div>
    </div>
  );
};

export default PokemonPage;
