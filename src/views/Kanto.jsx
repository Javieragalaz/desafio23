import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



export default function Pokemon () {

    const {name} = useParams();
    const [poke, setPoke] = useState ([])
    const [number,setNumber] = useState ("")
    const [photo, setPhoto] = useState ("")
    const [type, setType] = useState ("")
    const [attack, setAttack] = useState ("")
    const [defense, setDefense] = useState ("")
    const [speed, setSpeed] = useState ("")

    const detailsURL = "https://pokeapi.co/api/v2/pokemon/"
    const getDetails = async () => {
        const res = await fetch(detailsURL + name);
        const data = await res.json();

        setPoke(data);
        setNumber(data.id);
        setPhoto(data.sprites.other.dream_world);
        setAttack(data.stats[1]);
        setDefense(data.stats[2]);
        setSpeed(data.stats[5]);

    }

    useEffect (() => {
        getDetails ();
    
    }, []);

    return(

<div>Pokemon

<Pokedex />




</div>

    )
}