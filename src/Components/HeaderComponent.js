Headerimport {ReactComponent as HeaderLogo} from '../assets/header.svg';
import {ReactComponent as MenuLogo} from '../assets/menu.svg'
import LinkComponent from './LinkComponent.js';
import Navbar from '../Components/NavbarComponent.js'
import "../Style/HeaderComponent.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function HeaderComponent(){
    return(
      <div class="navbar">
        <HeaderLogo height="60px" width="40px" id="hlogo" alt="Home"/>
        <nav>
          <ul>
            <li><LinkComponent title={`Home`} url={`https://www.zeth48cloud.in`}/></li>
            <li><LinkComponent title={`About`} url={``}/></li>
            <li><LinkComponent title={`Projects`} url={``}/></li>
          </ul>
        </nav>
        <Router >
          <Navbar id="mlogo"/>
              <Switch>
                  <Route path='/' />
              </Switch>
        </Router >
      </div>
    );
}

export default HeaderComponent;
