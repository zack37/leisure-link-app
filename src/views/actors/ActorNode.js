import React from 'react'

export default class ActorNode extends React.Component {
  constructor(props) {
    super(props);
    this.rowClicked = this.rowClicked.bind(this);
    this.delete = this.delete.bind(this);
  }

  rowClicked(e) {
    e.preventDefault();
    this.props.onSelect(this.props.actor);
  }

  delete(e) {
    e.preventDefault();
    if(!confirm('Are you sure you want to delete this actor?')) return;
    this.props.onDelete(this.props.actor._id);
  }

  render() {
    var moviesList = [];
    if(this.props.actor.moviesActedIn) {
      moviesList = this.props.actor.moviesActedIn.map(function(movie) { return (<li style={{listStyleType: 'none'}}>{movie}</li>); });
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
        <td><span className="glyphicon glyphicon-trash btn btn-sm" onClick={this.delete}></span></td>
      </tr>
    );
  }
}
