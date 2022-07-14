import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunk'
import './index.css'


const PokemonApp = () => {


const { page, isLoading, pokemons=[] } = useSelector( state => state.pokemon);

const dispatch = useDispatch();

const handlePokemonsPage = () =>{
dispatch(getPokemons(page))
}

useEffect(() => {
  dispatch(getPokemons());
}, [])


  return (
    <>
    <div className={'container'}> 
    <h1 className={"title"} >pokemonApp</h1>
    <hr/>
    {isLoading ? 
     <span>isLoading: True</span>  
     :
     <span>isLoading: False</span>  
     }
    

     <ul>
    {
      pokemons.map( ({name}) => (
        <li key={name}>{name}</li>
      ))
    }
    </ul>
    <button onClick={handlePokemonsPage}>
      Next page
    </button>
    </div>
    </>
  )
}

export default PokemonApp