import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title : 'About',
        path : '/about',
        icon : <FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title : 'Projects',
        path : '/Projects',
        icon : <AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },

]

