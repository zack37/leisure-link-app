import React from 'react'

export default class ActorForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.state = { actor: this.props.actor || {} };
  }

  handleCreate(e) {
    e.preventDefault();

    var newActor = {
      _id: this.state.actor._id,
      name: React.getDOMNode(this.refs.name).value,
      age: React.getDOMNode(this.refs.age).value,
      gender: React.getDOMNode(this.refs.gender).value,
      agent: React.getDOMNode(this.refs.agent).value,
    };
    this.props.createActor(newActor);
    React.getDOMNode(this.refs.name).value = '';
    React.getDOMNode(this.refs.age).value = '';
    React.getDOMNode(this.refs.gender).value = '';
    React.getDOMNode(this.refs.agent).value = '';
  }

  render() {
    var legend = this.props.actor ? 'Edit an actor' : 'Add an actor';
    var submitFunc = this.props.actor ? this.handleEdit : this.handleCreate;
    var submitButtonText = this.props.actor ? 'Edit' : 'Add';

    return (
      <form className="form-horizontal col-md-6" onSubmit={submitFunc}>
        <fieldset>
          <legend>{legend}</legend>
          <div className="form-group col-md-12">
            <input type="text" className="form-control" defaultValue={this.state.actor.name} required="required" ref="name" placeholder="Name" />
          </div>
          <div className="form-group col-md-12" >
            <input type="number" className="form-control" defaultValue={this.state.actor.age} min="1" max="125" required="required" ref="age" placeholder="Age" />
          </div>
          <div className="form-group col-md-12" >
            <select className="form-control" defaultValue={this.state.actor.gender} required="required" ref="gender">
              <option value="" disabled style={{display: 'none'}} >Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group col-md-12" >
            <input type="text" className="form-control" defaultValue={this.state.actor.agent} ref="agent" placeholder="Name of Agent" />
          </div>

          <div className="form-group">
            <input type="submit" value={submitButtonText} className="btn btn-success col-md-2 col-md-offset-9" />
          </div>
        </fieldset>
      </form>
    );
  }
}
