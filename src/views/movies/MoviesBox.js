import React from 'react'
import MoviesList from './MoviesList'
import MovieForm from './MovieForm'

export default class MoviesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.createMovie = this.createMovie.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: '/movies/all',
      success: data => {
        this.setState({movies: data});
      }.bind(this)
    });
  }

  createMovie(newMovie) {
    $.ajax({
      url: '/movies/create',
      method: 'POST',
      data: newMovie,
      success: movie => {
        let movies = this.state.movies;
        movies.push(movie);
        this.setState({movies: movies});
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="row">
        <MovieForm createMovie={this.createMovie}/>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}
