import { Button } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchPokemon from "../../../helpers/customHooks/useFetchPokemon";
import { Card } from "antd";
const { Meta } = Card;
export default function PokemonCard({ pokemon }) {
  const url = pokemon.url;
  const [pokemonDetails, fetchData] = useFetchPokemon(url, {});
  const spiceUrl = pokemonDetails.species?.url;
  const [pokeSpices, fetchSpicesData] = useFetchPokemon(spiceUrl, {});

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    if (pokemonDetails.species !== undefined) {
      fetchSpicesData(spiceUrl);
    }
  }, [pokemonDetails]);
  return (
    <Card
      className="mx-xl-4  mx-lg-2 mx-md-3 pokemonCard mb-4"
      // hoverable

      cover={
        <Link to={`/pokemon/${pokemonDetails?.id}`}>
          <img
            src={pokemonDetails?.sprites?.front_default}
            alt="pokemonImage"
          />
        </Link>
      }>
      <h4>{pokemon?.name?.charAt(0)?.toUpperCase() + pokemon?.name?.slice(1)}</h4>
      <p>
        {pokeSpices?.flavor_text_entries !== undefined &&
          pokeSpices?.flavor_text_entries[0]?.flavor_text}
      </p>
      <div className="pokeTypes">
        {pokemonDetails.types?.map((type) => (
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
