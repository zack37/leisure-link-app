import React from 'react'

export default class ActorNode extends React.Component {
  constructor(props) {
    super(props);
    this.rowClicked = this.rowClicked.bind(this);
  }

  rowClicked(e) {
    e.preventDefault();
    this.props.onSelect(this.props.actor);
  }

  render() {
    var moviesList = [];
    if(this.props.actor.moviesActedIn) {
      moviesList = this.props.actor.moviesActedIn.map(function(movie) { return (<li>{movie}</li>); });
    }

    return (
      <tr onClick={this.rowClicked}>
        <td>{this.props.actor.name}</td>
        <td>{this.props.actor.age}</td>
        <td>{this.props.actor.gender}</td>
        <td>{this.props.actor.agent}</td>
        <td>
          <ul>
            {moviesList}
          </ul>
        </td>
        <td><span className="glyphicon glyphicon-trash"></span></td>
      </tr>
    );
  }
}
