import React from 'react';
import "./Navigation.scss"
import logo from "../../assets/logo.svg";


import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (

            <nav className='Nav' >
                <div className='ctn-logo'>
                    <img src={logo} className="Nav-logo" alt="logo" />

                    <label>React</label>
                </div>
                <div className="topnav">
                    <NavLink to="/home" activeClassName="active" exact={true} >Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/user" activeClassName="active">User</NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>

                </div>
            </nav>
        );
    }
}

export default Navigation;