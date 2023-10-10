import PropTypes from 'prop-types';

import '/src/styles/Cartao.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="cartao">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 className='cartaoNome'>{pokemon.name}</h2>
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
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
