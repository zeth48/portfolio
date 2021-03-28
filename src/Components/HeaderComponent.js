import {ReactComponent as HeaderLogo} from '../assets/header.svg';
import Navbar from '../Components/NavbarComponent.js'
import "../Style/HeaderComponent.scss"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function HeaderComponent(){
    return(
      <div class="navbar">
        <Router >
        <HeaderLogo height="60px" width="40px" id="hlogo" alt="Home"/>
        <nav>
          <ul>
            <li> <Link to="https://www.zeth48cloud.in" className="hlink"> Home </Link> </li>
            <li> <Link to="#" className="habout"> About </Link> </li>
            <li> <Link to="#" className="hprojects"> Projects </Link> </li>
            <li> <Navbar id="mlogo"/> 
            <Switch>
                <Route path='/' />
            </Switch>
            </li>
          </ul>
        </nav>
        </Router >
      </div>
    );
}

export default HeaderComponent;
