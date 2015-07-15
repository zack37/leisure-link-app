import React from 'react'
import {Tokenizer} from 'react-typeahead'

export default class MovieCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.getActorList = this.getActorList.bind(this);
    this.getDirectorList = this.getDirectorList.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { movie: this.props.movie || {}, actors: [], directors: [] };
    this.getActorList();
    this.getDirectorList();
  }

  getActorList() {
    $.ajax({
      url: '/actors/all/names',
      method: 'GET',
      success: actorNames => {
        this.setState({movie: this.state.movie, actors: actorNames, directors: this.state.directors})
      }.bind(this)
    });     
  }

  getDirectorList() {
    $.ajax({
      url: '/directors/all/names',
      method: 'GET',
      success: directorNames => {
        this.setState({movie: this.state.movie, actors: this.state.actors, directors: directorNames })
      }.bind(this)
    });
  }

  handleCreate(e) {
    e.preventDefault();
    let newMovie = {
      name: React.findDOMNode(this.refs.name).value,
      description: React.findDOMNode(this.refs.description).value,
      yearReleased: React.findDOMNode(this.refs.yearReleased).value,
      rating: React.findDOMNode(this.refs.rating).value
    };
    this.props.createMovie(newMovie);
    React.findDOMNode(this.refs.name).value = '';
    React.findDOMNode(this.refs.description).value = '';
    React.findDOMNode(this.refs.yearReleased).value = '';
    React.findDOMNode(this.refs.rating).value = '';
  }

  handleEdit(e) {
    e.preventDefault();
  }

  render() {
    const year = new Date().getFullYear();
    const yearReleasedPlaceholder = `Year Released (1800 - ${year})`;

    return (
      <form className="form-horizontal col-md-6" onSubmit={this.handleCreate}>
        <fieldset>
          <legend>Add a new movie</legend>
          <div className="form-group col-md-12">
            <input type="text" className="form-control" placeholder="Movie Title" required="required" ref="name"/>
          </div>
          <div className="form-group col-md-12">
            <textarea className="form-control" placeholder="Description" ref="description" ></textarea>
          </div>
          <div className="form-group col-md-12">
            <input type="number" className="form-control" min="1800" max={year} required="required" placeholder={yearReleasedPlaceholder} ref="yearReleased" />
          </div>
          <div className="form-group col-md-12">
            <input type="number" className="form-control" min="1" max="10" step=".1" required="required" placeholder="Rating (1-10)" ref="rating" />
          </div>
          <div className="form-group col-md-12">
            <Tokenizer
              options={this.state.actors}
              customClasses={{input: 'form-control', results: 'nav nav-pills nav-stacked', token: 'btn btn-default'}}
              maxVisible={5}
              defaultSelected={this.state.movie.actors}
              placeholder={'Actors'}
              ref="actorTokenizer"
              />
          </div>
          <div className="form-group col-md-12">
            <Tokenizer
              options={this.state.directors}
              customClasses={{input: 'form-control', results: 'nav nav-pills nav-stacked', token: 'btn btn-default'}}
              maxVisible={5}
              defaultSelected={this.state.movie.directors}
              placeholder={'Directors'}
              ref="directorTokenizer"
              />
          </div>

          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-success col-md-2 col-md-offset-9" />
          </div>
      </fieldset>
    </form>
    );
  }
}
