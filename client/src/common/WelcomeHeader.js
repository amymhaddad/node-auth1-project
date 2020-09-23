import { NavLink } from 'react-router-dom';
import React from 'react';


function WelcomeHeader() {
    const activeStyle = {color: "navy"}
    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to="/"> Home </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} exact to="/users"> Users </NavLink>
        </nav>
    )
}

export default WelcomeHeader;
