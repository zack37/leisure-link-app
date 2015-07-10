import React from 'react'
import {Link} from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="/">LeisureLink</Link>
            <ul className="nav navbar-nav">
              <li><Link to="movies">Movies</Link></li>
              <li><Link to="actors">Actors</Link></li>
              <li><Link to="directors">Directors</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
