import React from 'react'
import MovieNode from './MovieNode';

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var movieRows = [];

    if(this.props.movies) {
      var movieRows = this.props.movies.map(function(movie) {
        return (<MovieNode movie={movie} />);
      });
    }

    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Year Released</th>
            <th>Rating</th>
            <th>Actors</th>
            <th>Directors</th>
          </tr>
        </thead>
        <tbody>
          {movieRows}
        </tbody>
      </table>
    );
  }
}
