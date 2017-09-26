import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class PokemonIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllPokemon();
  }

  render() {
    return(
      <div>
        this.props.pokemon.forEach(mon => {
          <li>mon.name</li>
        })
      </div>
    )
  }
}

export default PokemonIndex;
