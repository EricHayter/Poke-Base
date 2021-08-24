import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Search.js";
import PokemonPage from "./PokemonPage";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Search />
				</Route>
				<Route
					path="/pokemon/:id"
					component={PokemonPage}
				/>
				<Route path="/" render={() => <div>404</div>} />
			</Switch>
		</BrowserRouter>
	);
};
