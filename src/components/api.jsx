import axios from 'axios';

const getPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = response.data;
    return pokemonData;
  } catch (error) {
    console.error(`Erro ao obter dados do Pokémon ${pokemonName}: ${error}`);
  }
};

export default getPokemonData;