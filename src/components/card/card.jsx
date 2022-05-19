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
        console.log(pokemonData)
        setPokemon(pokemonData);
      });
  }, []);

  return (
    <Link className="card-container" to={`/usesr/`}>
      { pokemon && (<img height={200}  alt={`user ${name}`}
        src={pokemon.sprites.other.home.front_default}
      /> )}
      <h2>{name}</h2>
      { pokemon &&

      <p>{pokemon.id}</p> }
     
    </Link>




  );
};

export default Card;
