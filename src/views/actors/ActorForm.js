import React from 'react'
import {Tokenizer} from 'react-typeahead'

export default class ActorForm extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieList = this.getMovieList.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { actor: this.props.actor || {}, movies: [] };
    this.getMovieList();
  }

  getMovieList() {
    $.ajax({
      url: '/movies/all/names',
      method: 'GET',
      success: movieNames => {
        this.setState({actor: this.state.actor, movies: movieNames});
      }.bind(this)
    });
  }

  handleCreate(e) {
    e.preventDefault();

    var newActor = {
      _id: this.state.actor._id,
      name: React.findDOMNode(this.refs.name).value,
      age: React.findDOMNode(this.refs.age).value,
      gender: React.findDOMNode(this.refs.gender).value,
      agent: React.findDOMNode(this.refs.agent).value,
      moviesActedIn: this.refs.tokenizer.getSelectedTokens()
    };
    this.props.createActor(newActor);
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.age).value = '';
    React.findDOMNode(this.refs.gender).value = '';
    React.findDOMNode(this.refs.agent).value = '';
    this.refs.tokenizer.getSelectedTokens().length = 0;
  }

  handleEdit(e) {
    e.preventDefault();

    var editActor = {
      _id: this.state.actor._id,
      name: React.findDOMNode(this.refs.name).value,
      age: React.findDOMNode(this.refs.age).value,
      gender: React.findDOMNode(this.refs.gender).value,
      agent: React.findDOMNode(this.refs.agent).value,
      moviesActedIn: this.refs.tokenizer.getSelectedTokens()
    };
    this.props.editActor(editActor);
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.age).value = '';
    React.findDOMNode(this.refs.gender).value = '';
    React.findDOMNode(this.refs.agent).value = '';
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
            <input type="text" className="form-control" name="name" defaultValue={this.state.actor.name} required="required" ref="name" placeholder="Name" />
          </div>
          <div className="form-group col-md-12" >
            <input type="number" className="form-control" name="age" defaultValue={this.state.actor.age} min="1" max="125" required="required" ref="age" placeholder="Age" />
          </div>
          <div className="form-group col-md-12" >
            <select className="form-control" defaultValue={this.state.actor.gender} name="gender" required="required" ref="gender">
              <option value="" disabled style={{display: 'none'}} >Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group col-md-12" >
            <input type="text" className="form-control" name="agent" defaultValue={this.state.actor.agent} ref="agent" placeholder="Name of Agent" />
          </div>
          <div className="form-group col-md-12">
            <Tokenizer
              options={this.state.movies}
              customClasses={{input: 'form-control', results: 'nav nav-pills nav-stacked', token: 'btn btn-default'}}
              maxVisible={5}
              defaultSelected={this.state.actor.moviesActedIn}
              placeholder={'Movies acted in'}
              ref="tokenizer"
              />
          </div>

          <div className="form-group">
            <input type="submit" value={submitButtonText} className="btn btn-success col-md-2 col-md-offset-9" />
          </div>
        </fieldset>
      </form>
    );
  }
}
