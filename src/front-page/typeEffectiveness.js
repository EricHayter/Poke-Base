import React from "react";

export default function TypeEffectiveness(props) {
	const weakAgainst = [];
	const normalAgainst = [];
	const strongAgainst = [];

	const typeRegex = /[a-z]+$/gi;

	let typeMatchups = Object.keys(props.pokemon).filter((property) =>
		property.startsWith("against")
	);

	typeMatchups.forEach((type) => {
		if (props.pokemon[type] < 1) {
			strongAgainst.push(type.match(typeRegex)[0]);
		} else if (props.pokemon[type] === 1) {
			normalAgainst.push(type.match(typeRegex)[0]);
		} else {
			weakAgainst.push(type.match(typeRegex)[0]);
		}
	});

	return (
		<div>
			<h2>type effectiveness</h2>
			<h3>Weak Against</h3>
			<div className={"PokemonTypes"}>
				{weakAgainst.map((type) => (
					<h3 className={type}>
						{type.toUpperCase()}
					</h3>
				))}
			</div>

			<h3>Strong Against</h3>
			<div className={"PokemonTypes"}>
				{strongAgainst.map((type) => (
					<h3 className={type}>
						{type.toUpperCase()}
					</h3>
				))}
			</div>
		</div>
	);
}
