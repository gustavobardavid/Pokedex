import './App.css'
import  { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import axios from 'axios';

function App() {
  // const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'); // Limitando a lista a 151 Pokémon
          const { results } = response.data;
          const pokemonData = await Promise.all(
            results.map(async (result) => {
              const pokemonResponse = await axios.get(result.url);
              return pokemonResponse.data;
            })
          );
  
          setPokemonList(pokemonData);
          setIsLoading(false);
        } catch (error) {
          console.error(`Erro ao obter a lista de Pokémon: ${error}`);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) {
      return <div>Carregando...</div>;
    }
  
  return (
    <>
    
    <div className="pokedex">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
    </>
  )
}

export default App