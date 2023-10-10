import PropTypes from 'prop-types';

import '/src/styles/Cartao.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="cartao">
    <div className="pokemon-image">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name} 
      />
    </div>
    <div className="pokemon-info">
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <p>Type(s): {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      {/* Aqui você pode adicionar mais informações sobre o Pokémon, se desejar */}
    </div>
  </div>
  );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      sprites: PropTypes.shape({
        front_default: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      types: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  };
  
export default PokemonCard;
