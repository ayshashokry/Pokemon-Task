import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useFetchPokemon } from "../../../helpers/customHooks/useFetchPokemon";
import { Card } from "antd";import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PokemonCard({ pokemon }) {
  const url = pokemon.url;
  const [pokemonDetails, , , pokeSpices] = useFetchPokemon(url, {}, true);
  const pokemonName =
    pokemon?.name?.charAt(0)?.toUpperCase() + pokemon?.name?.slice(1);
  const renderLink = () => (
    <Link to={`/pokemon/${pokemonDetails?.id}`}>
      <img
        loading="lazy"
        src={pokemonDetails?.sprites?.front_default}
        alt="pokemonImage"
      />
    </Link>
  );
  return (
    <Card
      className="mx-xl-4  mx-lg-2 mx-md-3 pokemonCard mb-4"
      cover={renderLink()}>
      <h4>{pokemonName}</h4>
      

      {pokeSpices?.flavor_text_entries !== undefined && (
        <p>{pokeSpices?.flavor_text_entries[0]?.flavor_text}</p>
      )}
      <div className="pokeTypes">
        {pokemonDetails.types?.length > 0 &&
          pokemonDetails.types?.map((type) => (
            <Button
              style={{ backgroundColor: pokeSpices?.color?.name }}
              key={type?.slot}>
              {type?.type?.name?.charAt(0)?.toUpperCase() +
                type?.type?.name?.slice(1)}
            </Button>
          ))}
      </div>
    </Card>
  );
}
