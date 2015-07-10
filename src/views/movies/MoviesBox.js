import React from 'react'
import MoviesList from './MoviesList'
import MovieCreateForm from './MovieCreateForm'

export default class MoviesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.createMovie = this.createMovie.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: '/movies/all',
      success: function(data) {
        this.setState({movies: data});
      }.bind(this)
    });
  }

  createMovie(newMovie) {
    $.ajax({
      url: '/movies/create',
      method: 'POST',
      data: newMovie,
      success: data => {
        let movies = this.state.movies;
        movies.push(newMovie);
        this.setState({movies: movies});
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <MovieCreateForm createMovie={this.createMovie}/>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}
