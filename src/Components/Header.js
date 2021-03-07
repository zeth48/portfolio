import {ReactComponent as HeaderLogo} from '../assets/header.svg';
import {ReactComponent as MenuLogo} from '../assets/menu.svg'
import "../Style/Header.scss"

function Header(){
    return(
      <div class="navbar">
        <HeaderLogo height="60px" width="40px" id="hlogo" alt="Home"/>
        <nav>
          <ul>
            <li><a href="" data-content="Home">Home</a></li>
            <li><a href="" data-content="About">About</a></li>
            <li><a href="" data-content="Projects">Projects</a></li>
          </ul>
        </nav>
        <MenuLogo height="25px" width="30px" id="mlogo"/>
      </div>
    );
}

export default Header;