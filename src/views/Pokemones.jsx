import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { JContext } from '../JContext';

export default function Pokemones() {
  const { options, setPokemonName, verPokemon } = useContext(JContext);

  return (

    <Container className="ptnav text-center d-flex flex-column align-items-center">
      <h1 className="mt-4 text-info-emphasis">Select one of your favs!</h1>

      <Form.Select
        aria-label="Default select example"
        className="m-4 selw p-3"
        defaultValue={'x'}
        onChange={(e) => setPokemonName(e.target.value)}
      >
        <option disabled value={'x'}>
          Select a Pokemón
        </option>
        {options.map((op, index) => {
          return (
            <option key={index} value={op}>
              {op}
            </option>
          );
        })}
      </Form.Select>

      <Button className="btn-danger text-light mt-4 border-dark" onClick={() => verPokemon()}>
        Pokedex
      </Button>
    </Container>
  );
}