import {ReactComponent as HeaderLogo} from '../assets/header.svg';
import React from 'react';
import Navbar from '../Components/NavbarComponent.js'
import "../Style/HeaderComponent.scss"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

function HeaderComponent(){

    return(
      <div className="navbar">
        <HeaderLogo height="60px" width="40px" id="hlogo" alt="Home"/>
        <nav>
          <ul>
            <li> <Link to="/" className="hlink"> Home </Link> </li>
            <li> <Link to="/about" className="habout"> About </Link> </li>
            <li> <Link to="/projects" className="hprojects"> Projects </Link> </li>
          </ul>
        </nav>
      </div>
    );
}

export default HeaderComponent;
