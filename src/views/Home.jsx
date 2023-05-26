import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Home() {

    const url = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemones, setPokemones] = useState([]);
    const [name, setName] = useState (0);
    

    const getPoke = async () => {
        const res = await fetch(url);
        const {results} = await res.json();
        setPokemones(results)
       
    }

    useEffect(() => {
        getPoke()

    }, [])

    const navigate = useNavigate();

    const irAPokemon = ()  => {
        navigate(`/pokemon/${name}`)
    }

    return (

        <div>Home
            <Form.Select aria-label="Default select example" onChange = {(target) => setName(target.value) }>
                {pokemones.map((results,index) =>  <option key={index} value={results.name}> {results.name} </option>)}

            </Form.Select>

            <Button onClick ={irAPokemon}>Pokedex</Button>
        </div>

    );
}