import * as APIUtil from '../util/api_util';

export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_SINGLE_POKEMON = 'GET_SINGLE_POKEMON';

export const getAllPokemon = pokemon => ({
  type: GET_ALL_POKEMON,
  pokemon
})

export const getSinglePokemon = payload => ({
  type: GET_SINGLE_POKEMON,
  payload
})

//async

export const fetchAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => {dispatch(getAllPokemon(pokemon))})
}

export const fetchSinglePokemon = id => dispatch => {
  return APIUtil.fetchSinglePokemon(id).then(pokemon => {
    dispatch(getSinglePokemon(pokemon));
    return pokemon
  });
}
