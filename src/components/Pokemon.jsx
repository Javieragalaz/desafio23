//IMPORTAR HOOKS
import { useContext } from "react";
import { useParams } from "react-router-dom";

//CONTEXT
import { JContext } from "../JContext";

//ESTILOS BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

//AQUI COMIENZA LA FUNCIÓN 

export default function Pokemones() {
  const { pokemon, pokemonStats } = useContext(JContext);
  const { pokeName } = useParams(); // El hook useParams nos permite acceder desde un componente a los parámetros de la ruta.

  return (
    <Container>
      <Card style={{ width: '25rem' }} className="rounded mx-auto d-block m-4 border border-dark p-4">
        <Card.Img src={pokemon.img} />

        <Card.Body>
          <Card.Title className='text-center fs-2'>{pokeName}</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush">{pokemonStats[0]?.map((x, i) => {
          return (
            <ListGroup.Item key={i}> {x.name}:{' '} {x.value}</ListGroup.Item>
          );
        })}
          <ListGroup.Item className='text-center'> {pokemon.types}</ListGroup.Item>

        </ListGroup>

      </Card>
    </Container>

  )
}

