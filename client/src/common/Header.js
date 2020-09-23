import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
    const activeStyle = {color: "navy"}
    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to="/"> Home </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/register"> Register </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/login"> Login </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/users"> Users </NavLink>
        </nav>
    )
}

export default Header;