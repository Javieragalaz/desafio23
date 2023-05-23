import { NavLink } from "react-router-dom";


export default function Navbar () {

    const isPokemon = ({isActive}) => (isActive ? 'active' : 'notActive');

    return (
        <div>
            <NavLink className = {isPokemon} to = '/'> Home</NavLink>
            <NavLink className = {({isActive}) => (isActive ? 'active' : 'nostActive')} to = '/pokemon'> Pokemon</NavLink>
        </div>
    )
}