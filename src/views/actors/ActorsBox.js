import React from 'react'
import ActorsList from './ActorsList'
import ActorForm from './ActorForm'

export default class ActorsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actors: [], selectedActor: {}, actorSelected: false }
    this.createActor = this.createActor.bind(this);
    this.editActor = this.editActor.bind(this);
    this.deleteActor = this.deleteActor.bind(this);
    this.actorSelected = this.actorSelected.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: '/actors/all',
      success: data => {
        this.setState({actors: data})
      }.bind(this)
    });
  }

  actorSelected(selectedActor) {
    this.setState({actors: this.state.actors, selectedActor: selectedActor, actorSelected: true});
  }

  createActor(newActor) {
    $.ajax({
      url: '/actors/create',
      method: 'POST',
      data: newActor,
      success: actor => {
        var actors = this.state.actors;
        actors.push(actor);
        this.setState({actors: actors});
      }.bind(this)
    });
  }

  editActor(newActor) {
    $.ajax({
      url: '/actors/edit',
      method: 'POST',
      data: newActor,
      success: actors => {
        this.setState({actors: actors, selectedActor: {}, actorSelected: false});
      }.bind(this)
    });
  }

  deleteActor(id) {
    $.ajax({
      url: '/actors/delete',
      method: 'POST',
      data: {id: id},
      success: actors => {
        this.setState({actors: actors, selectedActor: {}, actorSelected: false});
      }.bind(this)
    });
  }

  render() {
    var detail = this.state.actorSelected ? <ActorForm actor={this.state.selectedActor} editActor={this.editActor} /> : {};

    return (
      <div>
        <div className="row">
          <ActorForm createActor={this.createActor} />
          {detail}
        </div>
        <ActorsList actors={this.state.actors} onActorSelect={this.actorSelected} onActorDelete={this.deleteActor} />
      </div>
    );
  }
}
