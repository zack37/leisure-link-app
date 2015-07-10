import React from 'react'
import ActorsList from './ActorsList'
import ActorForm from './ActorForm'

export default class ActorsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { actors: [], selectedActor: {}, actorSelected: false }
    this.createActor = this.createActor.bind(this);
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
      success: data => {
        var actors = this.state.actors;
        actors.push(newActor);
        this.setState({actors: actors});
      }.bind(this)
    });
  }

  editActor(newActor) {
    this.setState({ actors: this.state.actors, selectedActor: {}, actorSelected: false });
  }

  render() {
    var detail = this.state.actorSelected ? <ActorForm actor={this.state.selectedActor} /> : {};

    return (
      <div>
        <div className="row">
          <ActorForm createActor={this.createActor} />
          {detail}
        </div>
        <ActorsList actors={this.state.actors} onActorSelect={this.actorSelected} />
      </div>
    );
  }
}
