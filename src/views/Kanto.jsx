import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Selection from '../components/Selection'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



export default function Pokemon() {

    const { name } = useParams();
    const [poke, setPoke] = useState([])

    const [photo, setPhoto] = useState("")
    const [type, setType] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [speed, setSpeed] = useState("")

    const detailsURL = "https://pokeapi.co/api/v2/pokemon/"
    const getDetails = async () => {
        const res = await fetch(detailsURL);
        const data = await res.json();

        setPoke(data);

        setPhoto(data.sprites.other.official-artwork);
        type.setType(type.name)
        setAttack(data.stats[1]);
        setDefense(data.stats[2]);
        setSpeed(data.stats[5]);

    }

    useEffect(() => {
        getDetails();

    }, []);

    return (

        <div>Pokemon

            <Selection />

            <Card className="pokeCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="pokeIMG" src={photo.front_default} />
                <Card.Body>
                    <Card.Title className="pokeTitle">{poke.name}</Card.Title>
                    <div className="pokeText">
                        <ul>

                            <li>Type: {type.name}</li>
                            <li>Attack: {attack.base_stat}</li>
                            <li>Defense: {defense.base_stat}</li>
                            <li>Speed: {speed.base_stat}</li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>




        </div>

    )
}