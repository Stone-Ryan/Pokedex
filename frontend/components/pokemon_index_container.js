import { connect } from 'react-redux';

import PokemonIndex from './pokemon)index';
import { selectAllPokemon } from '../reducers/selectors';
import { getAllPokemon } from '../reducers/pokemon_actions';

const mapStateToProps = state =>({
  pokemon: selectAllPokemon(state),
});

const mapDispatchToProps = dispatch =>({
  fetchAllPokemon: () => dispatch(fetchAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex)
