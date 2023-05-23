import { useEffect } from "react";
export default function Home () {

    const url = 'https://pokeapi.co/api/v2/pokemon'

    const getPoke = async() => {
        const res = await fetch (url);
        const data = await res.json ();
console.log (data)
    }

    useEffect (() => {
        getPoke ()

    }, [])

    return(

<div>Home</div>
    )
}