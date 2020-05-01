import React, { FunctionComponent, useState, useEffect } from 'react'
import { Task } from '../types'
import getPokemon from '../api/getPokemon'

interface PokemonItemProps {
  tasks: Task[]
}

type PokemonDescription = {
  sprites: {
    front_shiny: string
  }
}

export const PokemonItem: FunctionComponent<PokemonItemProps> = (tasks) => {
  const [pokemon, setPokemon] = useState<PokemonDescription>()

  const fetchPokemon = async (): Promise<void> => {
    try {
      const pokemonItem = await getPokemon()

      setPokemon(pokemonItem)
    } catch (error) {
      console.log(`Error: ${error}`)
    }

    return
  }

  useEffect(() => {
    fetchPokemon()
  }, [tasks])

  return <div>{pokemon && <img src={pokemon.sprites.front_shiny} />}</div>
}
