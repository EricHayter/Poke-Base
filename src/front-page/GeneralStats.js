import React from "react";
import "../App.css";

export default function GeneralStats(props) {
	return (
		<div>
			<h2 className={"PokemonStatTitle"}>General Stats</h2>
			<p className={"PokemonStat"}>
				<span className={"statName"}>Weight (kg):</span>{" "}
				{props.pokemon.weight_kg}
			</p>
			<p className={"PokemonStat"}>
				<span className={"statName"}>Height (m):</span>{" "}
				{props.pokemon.height_m}
			</p>
			<p className={"PokemonStat"}>
				<span className={"statName"}>Generation:</span>{" "}
				{props.pokemon.generation}
			</p>
			<p className={"PokemonStat"}>
				<span className={"statName"}>
					Gender Ratio:
				</span>{" "}
			</p>
			<p className={"PokemonStat"}>
				<span className={"statName"}>Abilities:</span>{" "}
				{[...props.pokemon.abilities].join(", ")}
			</p>
		</div>
	);
}
