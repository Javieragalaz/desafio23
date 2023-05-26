import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';

export default function Selection () {

    const url = "https://pokeapi.co/api/v2/pokemon/"

    const [poke, setPoke] = useState([]);
    const [name, setName] = useState("");


    const navigate = useNavigate();


    const irAPokemon = () => {
        navigate(`/pokemones/${name}`)
        
    }


    const getPokes = async () => {
        const res = await fetch(url);
        const { results } = await res.json();

        setPoke(results);
    }



    useEffect(() => {
        getPokes();
    }, []);



    return (
        <div className="container">

            <Form.Select aria-label="Default select example" onChange={({ target }) => { setName(target.value) }} className="form">
                <option >Elige a tu Pokemon!</option>
                {poke.map((pokemon, id) => {
                    return <option key={id} value={pokemon.name}>{pokemon.name}</option>
                })}
            </Form.Select>

            <button onClick={irAPokemon}>Buscar</button>

        </div>
    )
}