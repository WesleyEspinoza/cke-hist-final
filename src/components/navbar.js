import React, { Component } from "react";
import './componentCSS/Navbar.css'
import Image from 'react-bootstrap/Image'
import history_logo from '../images/history.png'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
 
class NavBar extends Component {

  constructor(props) {
    super(props)
  }

  createEvents = () => {
    const result = Array(this.props.numberOfEvents)
    for (let i = 0; i < result.length; i++) {
      result[i] = (
        <NavDropdown.Item
          onClick={() => this.props.changeEvent(i)}
        >
          {"Event " + String(i + 1)}
        </NavDropdown.Item>
      )
    }
    return result
  } 

  render() {
    return (
      <React.Fragment style={{width: "100%"}}>
        <div className="container" style={{width: "100%"}}>
          <nav className="navbar navbar-dark bg-dark mb-3" style={{width: "100%"}}>
          <div className="rowC">
            <div className="navItem">
              <Image style={{height: "55px"}} src={history_logo} />
            </div>
            <div className="navItem">
            <a className="navbar-brand" onClick={() => this.props.changeEvent(-1)} href="#home"><h1>Home</h1></a>
            </div>
            <div className="navItem">
            <a className="navbar-brand" onClick={() => this.props.changeEvent(-2)} href="#citations"><h1>Citations</h1></a>
            </div>
            <div className="navItem" style={{width: "150px"}}>
              <NavDropdown  title="Events" id="collasible-nav-dropdown" style={{width: "150px", fontSize: "36px", color: "white"}}>
                {this.createEvents()}
              </NavDropdown>
            </div>
          </div>
        </nav>
        </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;