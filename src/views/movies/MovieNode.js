import React from 'react'

export default class MovieNode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.movie.name}</td>
        <td>{this.props.movie.description}</td>
        <td>{this.props.movie.yearReleased}</td>
        <td>{this.props.movie.rating}/10</td>
        <td>
          <ul>
            {this.props.movie.actors.map(function(actor) { return (<li>{actor}</li>); })}
          </ul>
        </td>
        <td>
          <ul>
            {this.props.movie.directors.map(function(director) { return (<li>{director}</li>); })}
          </ul>
        </td>
      </tr>
    );
  }
}
