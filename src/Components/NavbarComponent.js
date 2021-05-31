import React, {useState} from 'react';
import { GrMenu, GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import {ReactComponent as HeaderLogo} from '../assets/header.svg';
import {ReactComponent as MenuLogo} from '../assets/menu.svg';
import '../Style/NavbarComponent.scss';

function NavbarComponent(){

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
    <>
        <div className="navbar">
          <HeaderLogo height="60px" width="40px" id="hlogo" alt="Home"/>
          <nav>
            <ul>
              <li> <Link to="/" className="hlink"> Home </Link> </li>
              <li> <Link to="/about" className="habout"> About </Link> </li>
              <li> <Link to="/projects" className="hprojects"> Projects </Link> </li>
              <li> <GrMenu size={30} className="hamburger" type="button" onClick={showSidebar} /> </li>
            </ul>
          </nav>
        </div>

        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
            <GrClose size={30} className="hamburger-close" type="button" onClick={showSidebar} /> 
            <ul onClick={showSidebar}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/">About</Link> </li>
            </ul>
        </nav>
    </>
    );
}

export default NavbarComponent; 
