import React from "react";
import { pad } from "./utilFunctions";
import { useParams } from "react-router-dom";
import pokemonData from "../db.js";
import "../App.css";
import TypeEffectiveness from "./typeEffectiveness";
import GeneralStats from "./GeneralStats";

const PokemonPage = (props) => {
  let { id } = useParams();
  const pokemon = pokemonData.filter((pokemon) => pokemon.name === id)[0];

  return (
    <div className={"pokemonPage"}>
      <div className={"infoPageTitle"}>
        <h1 className={"PokemonName"}>
          {pokemon.name}
          {pokemon.is_legendary === 1 ? " 🔥" : ""}
          {" #" + pokemon.pokedex_number}
        </h1>
        <h3 className={"PokemonClassification"}>{pokemon.classfication}</h3>
      </div>

      <div className={"container"}>
        <div>
          <img
            className={"infoPagePicture"}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
              pokemon.pokedex_number,
              3
            )}.png`}
            alt={pokemon.name}
          ></img>
          <div className={"PokemonTypes"}>
            <h3 className={pokemon.type1}>{pokemon.type1.toUpperCase()}</h3>
            <h3 className={pokemon.type2}>{pokemon.type2.toUpperCase()}</h3>
          </div>
        </div>

        <div class={"baseStats"}>
          <h2 className={"PokemonStatTitle"}>Base Stats</h2>
          <p className={"PokemonStat"}>
            <span className={"statName"}>HP:</span> {pokemon.hp}
          </p>
          <p className={"PokemonStat"}>
            <span className={"statName"}>Attack:</span> {pokemon.attack}
          </p>
          <p className={"PokemonStat"}>
            <span className={"statName"}>Defense:</span> {pokemon.defense}
          </p>
          <p className={"PokemonStat"}>
            <span className={"statName"}>Sp. Atk:</span> {pokemon.sp_attack}
          </p>
          <p className={"PokemonStat"}>
            <span className={"statName"}>Sp. Def:</span> {pokemon.sp_defense}
          </p>
          <p className={"PokemonStat"}>
            <span className={"statName"}>Speed:</span> {pokemon.speed}
          </p>
          <GeneralStats pokemon={pokemon} />
          <TypeEffectiveness pokemon={pokemon} />
        </div>
        
      </div>
    </div>
  );
};

export default PokemonPage;
