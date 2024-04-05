import React, { useState } from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import img from "../images/logo-dark.png"
import './hook.css'
const Hook = () => {
  const [check, setCheck] = useState(true);

  const toggle = () => setCheck(!check);
  return (
    <div className='container'>
      <div className='container'>
        <Navbar expand='md'>
          <NavbarBrand href="/">
            <img src={img}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SERVICES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">ABOUT US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"> PRICING </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">BLOGS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CONTACT US</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <span className='icon'>
                <i class="fa-solid fa-id-badge"></i>
              </span>
            </NavbarText>
          </Collapse>
        </Navbar>
        <div className={check ? "inactive" : "active"} >
          <ul className='navbar_1'>
            <li><a>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>ABOUT US</a></li>
            <li><a>PRICING</a></li>
            <li><a>BLOGS</a></li>
            <li><a>CONTACT US</a></li>
            <span className='icon'>
                <i class="fa-solid fa-id-badge"></i>
              </span>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Hook;
