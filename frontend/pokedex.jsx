import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing
import { fetchAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.fetchAllPokemon = fetchAllPokemon();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore}/>, rootEl)
})
