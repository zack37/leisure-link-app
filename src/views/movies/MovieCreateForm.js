import React from 'react'

export default class MovieCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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

  render() {
    const year = new Date().getFullYear();
    const yearReleasedPlaceholder = `Year Released (1800 - ${year})`;

    return (
      <form className="form-horizontal col-md-6" onSubmit={this.handleSubmit}>
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

          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-success col-md-2 col-md-offset-9" />
          </div>
      </fieldset>
    </form>
    );
  }
}
