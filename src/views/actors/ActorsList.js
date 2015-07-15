import React from 'react'
import ActorNode from './ActorNode'

export default class ActorsList extends React.Component {
  render() {
    var actorRows = [];

    if(this.props.actors){
      var self = this;
      actorRows = this.props.actors.map(function(actor) {
        return (<ActorNode actor={actor} onSelect={self.props.onActorSelect} onDelete={self.props.onActorDelete} />);
      });
    }

    return(
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Agent</th>
            <th>Movies Acted In</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {actorRows}
        </tbody>
      </table>
    );
  }
}
