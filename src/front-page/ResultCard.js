import React from "react";
import { urlFixer } from "./utilFunctions.js";
import "../App.css";
import { Link } from "react-router-dom"

export default class ResultCard extends React.Component {
  render() {
    let pokemonName = this.props.pokemon.name;

    return (
      <Link to={`/pokemon/${pokemonName}`} className={"Card"}>
        <img
          src={`https://img.pokemondb.net/sprites/sword-shield/icon/${urlFixer(
            pokemonName
          )}.png`}
          alt={pokemonName}
        ></img>
        <p className={"CardTitle"}>{pokemonName}</p>
      </Link>
    );
  }
}
