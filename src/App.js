import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from 'axios'

function App() {
  const [pokemon,setPokemon] = useState([])
  const [currentPageUrl,setCurrentPageurl]= useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl,setNextPageUrl] = useState('')
  const [prevPageUrl,setPrevPageUrl] = useState('')

  useEffect(()=>{
  axios.get(currentPageUrl).then(res =>{
    
      console.log("date",res.data)
      setPrevPageUrl(res.data.previous)
      setNextPageUrl(res.data.next)
      setPokemon(res.data.results.map(p =>p.name ))
    
  }) 
},[currentPageUrl])

 function gotoNextPage(){
 
   setCurrentPageurl(nextPageUrl)
 }
 function gotoPrevPage(){
   setCurrentPageurl(prevPageUrl)
 }
 
  return (
    <>
      <PokemonList pokemon ={pokemon}/>
      <Pagination 
      gotoPrevPage={gotoPrevPage}
      gotoNextPage={gotoNextPage}
/>

      </>
  );
}

export default App;
