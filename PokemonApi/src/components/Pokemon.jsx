import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Pokemon() {
    const [nr,setNr]=useState(0)
    const [pokemons,setPokemon] = useState([])
    const [limit,setLimit] = useState(807)

    useEffect(() => {
     axios.get(' https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response=>{
    console.log(response);
    setPokemon(response.data.results)
})
    .catch(err=>console.log(err))
},{})
  return (
    <div>
        <button onClick={(e)=> setNr(nr+1)}>Fetch Pokemon</button>
   
    <ul>
        {pokemons.map((item,index)=>
        <li> {item.name} </li>
        )}
    </ul>
    </div>

  )
}

export default Pokemon