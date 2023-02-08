import React, { useContext, useEffect, useState } from "react";
//import helpers
import useFetchPokemon from "../../helpers/customHooks/useFetchPokemon";
//import components
import Loader from "../../containers/Loader";
import PokemonCard from "./components/PokemonCard";
//import packages
import { Button, Col, Row } from "antd";
import { Container } from "react-bootstrap";
//import Style
import "./home.scss";
import NoResults from "../DetailsPage/components/NoResults";

export default function HomePage() {
  const APIURL = "https://pokeapi.co/api/v2/";
  const [url, setUrl] = useState(`${APIURL}pokemon?limit=6&offset=0`);
  const [pokemonData, fetchData, loading, error] = useFetchPokemon(url, []);

  //Get first 6 pokemon
  useEffect(() => {
    fetchData(`${APIURL}pokemon?limit=6&offset=0`);
  }, [url]);

  const handlePrevious = () => {
    if (pokemonData.previous !== undefined) {
      setUrl(pokemonData.previous);
    }
  };

  const handleNext = () => {
    if (pokemonData.next !== undefined) {
      setUrl(pokemonData.next);
    }
  };
  return loading ? (
    <Loader />
  ) : error !== null ? (
    <NoResults resuestError />
  ) : (
    <Container className="mt-5">
      <Row type="flex" className="px-xl-5 mx-xl-5 px-lg-2 mx-lg-2 homeCardsRow">
        {pokemonData?.results?.map((pokemon, index) => (
          <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
      <div className="pageBtns">
        <Button
          className={`pokeBtn`}
          disabled={pokemonData.previous == null}
          onClick={handlePrevious}>
          Previous
        </Button>
        <Button
          className={`pokeBtn`}
          onClick={handleNext}
          disabled={pokemonData.next == null}>
          Next
        </Button>
      </div>
    </Container>
  );
}
