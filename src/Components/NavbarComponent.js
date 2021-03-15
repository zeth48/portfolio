import React from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavbarComponent(){
    return(
        <>
            <div className="Navbar">
               <Link to="#" className="menu-bars">
                    <FaIcons.FaBars size={20}/>
               </Link>
            </div>
        </>
    );
}

export default NavbarComponent; 
