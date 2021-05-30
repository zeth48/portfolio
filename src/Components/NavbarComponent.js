import React, {useState} from 'react';
import { GrMenu, GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import '../Style/NavbarComponent.scss';

function NavbarComponent(){

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
    <>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <GrClose size={30} className="hamburger" type="button" onClick={showSidebar} >
                <div></div>
            </GrClose>
            <ul onClick={showSidebar}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/">About</Link> </li>
            </ul>
        </nav>
    </>
    );
}

export default NavbarComponent; 
