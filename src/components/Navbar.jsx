import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


export default function Navbar () {

    const isPokemon = ({isActive}) => (isActive ? 'active' : 'notActive');

    return (
        <div className ='navBar'>
            <Nav variant = 'top'>
            <NavLink className = {isPokemon} to = '/'> Home</NavLink>
            <NavLink className = {({isActive}) => (isActive ? 'active' : 'nostActive')} to = '/pokemon'> Pokemon</NavLink>
            </Nav>
        </div>
    )
}