import React, { Component } from 'react';
import './styles.css';
import toplogo from '../../assets/Red-vine-logo.png';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
class Menus extends Component {
render() {
return (
<header>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
<div className="container">
<Navbar.Brand exact="true" to="/"><img src={toplogo} className="img-fluid" alt="Nav_logo"/></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="ml-auto">
<NavLink exact="true" to="/" eventkey={1}>Home</NavLink>
<NavLink exact="true" to="/about" eventkey={2}>About</NavLink>
<NavDropdown title="Services" id="collasible-nav-dropdown">
<NavLink exact="true" to="/serviceone" eventkey={3}>Full Body Massage</NavLink>
<NavLink exact="true" to="/servicetwo" eventkey={4}>Swedish Body Massage </NavLink>
<NavLink exact="true" to="/servicethree" eventkey={5}>Lavasa Benesa Massage</NavLink>
<NavLink exact="true" to="/servicefour" eventkey={6}>Mud Body Massage</NavLink>
<NavLink exact="true" to="/servicefive" eventkey={7}>Chocolate Body Massage</NavLink>
<NavLink exact="true" to="/servicesixth" eventkey={8}>Stone Body Massage</NavLink>
</NavDropdown>
<NavLink exact="true" to="/gallery" eventkey={10}>Gallery</NavLink>
<NavLink exact="true" to="/package" eventkey={11}>Packages</NavLink>
<NavLink exact="true" to="/blog" eventkey={12}>Blog</NavLink>
<NavLink exact="true" to="/contact" eventkey={13}>Contact</NavLink>
</Nav>
</Navbar.Collapse>
</div>
</Navbar>
</header>

);
}
}
export default Menus;