import React from 'react'
import Navbar from '../views/Navbar'
import Home from '../views/Home'
import MoviesBox from '../views/movies/MoviesBox'
import ActorsBox from '../views/actors/ActorsBox'
import DirectorsBox from '../views/directors/DirectorsBox'
import Router from 'react-router'

const {Route, RouteHandler, DefaultRoute} = Router;

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
}



const routes = (
  <Route name="app" handler={App} path="/">
    <Route name="movies" handler={MoviesBox} path="/movies" />
    <Route name="actors" handler={ActorsBox} path="/actors" />
    <Route name="directors" handler={DirectorsBox} path="/directors" />
    <DefaultRoute handler={Home} />
  </Route>
);
// Think of adding a 404 view just for fun.

export default routes;
