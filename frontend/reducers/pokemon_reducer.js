import { GET_ALL_POKEMON, GET_SINGLE_POKEMON } from '../actions/pokemon_actions.js';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case GET_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case GET_SINGLE_POKEMON:
      const mon = action.payload.pokemon;
      return merge({}, state, { [mon.id]: mon });
    default:
      return state;
  }
};

export default pokemonReducer;
