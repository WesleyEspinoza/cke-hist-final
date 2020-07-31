import React, { Component } from "react";
import './componentCSS/Navbar.css'
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <nav className="navbar navbar-dark bg-dark mb-3">
        <div className="rowC">
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Womans History</h1></a>
          </div>
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Event 1</h1></a>
          </div>
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Event 2</h1></a>
          </div>
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Event 3</h1></a>
          </div>
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Event 4</h1></a>
          </div>
          <div className="navItem">
          <a className="navbar-brand" href="#"><h1>Event 5</h1></a>
          </div>
        </div>
        </nav>
        </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;