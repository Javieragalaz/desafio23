//Componente de react router dom
import { NavLink } from 'react-router-dom';

//Estilos de Bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Función
export default function NavBar() {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive'); //Atributo del NavLink

  return (

    <Navbar expand="lg" bg="danger" variant="dark" >
      <Container>
        <NavLink className={setActiveClass} to="/">
          HOME
        </NavLink>{' '}
        <NavLink className={setActiveClass} to="/pokemones">
          POKEDEX
        </NavLink>


        <Nav>
          <Nav.Link href="https://pokeapi.co/">PokeAPI</Nav.Link>

        </Nav>

      </Container>
    </Navbar>


  )

} 