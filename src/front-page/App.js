import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import FrontPage from "./FrontPage"
import PokemonPage from "./PokemonPage"

const App = () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact><FrontPage /></Route>
                <Route path='/pokemon/:id' component={PokemonPage} />
                <Route path='/'  render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    ) 
} 

export default App;