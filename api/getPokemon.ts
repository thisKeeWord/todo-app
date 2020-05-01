export default function getPokemon() {
  const randomPokemonId = Math.ceil(Math.random() * 890)

  return fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
    .then((response) => response.json())
    .then((body) => {
      return body
    })
    .catch((error) => {
      throw error
    })
}
