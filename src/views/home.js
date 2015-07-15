import React from 'react'

export default class Home extends React.Component {
  render() {
    var tech = [
      'Node',
      'Express',
      'BodyParser',
      'Mongo',
      'Mongoose',
      'React',
      'React-Router',
      'Webpack',
      'Babel',
      'Bootstrap',
      'Mocha',
      'Chai']
    .map(function(x) { return (<a href="#" className="list-group-item">{x}</a>); });
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to LeisureLink!</h1>
          <p>
            This is my application to show what I know. Even though this is the interview app, I never had to do it because Tyler Garlick is awesome.
            But, in my attempt at making sure I know what the hell I&#39;m doing with node, I decided to go ahead and implement it.
          </p>
        </div>
        <p>
          Technologies included in this appication are as follows:
          <ul className="list-group col-md-3">
            {tech}
          </ul>
        </p>
      </div>
    );
  }
}
