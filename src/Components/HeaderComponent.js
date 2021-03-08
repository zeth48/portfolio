import {ReactComponent as HeaderLogo} from '../assets/header.svg';
import {ReactComponent as MenuLogo} from '../assets/menu.svg'
import LinkComponent from './LinkComponent.js';
import "../Style/HeaderComponent.scss"

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
        <MenuLogo height="25px" width="30px" id="mlogo"/>
      </div>
    );
}

export default HeaderComponent;