import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ user }) => {
  const { name, url } = user;

  const [pokemon, setPokemon] = useState(null);
  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((pokemonData) => {
       // console.log(pokemonData);
        console.log(pokemonData.sprites.other.home.front_default)
        setPokemon(pokemonData);
      });
  }, []);

  return (
    <Link className="card-container" to={`/users/`}>
      { pokemon && (<img height={100}  alt={`user ${name}`}
        src={pokemon.sprites.other.home.front_default}
      /> )}
      <h2>{name}</h2>
      
    </Link>
  );
};

export default Card;
