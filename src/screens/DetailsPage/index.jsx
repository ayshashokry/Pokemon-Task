import { Button } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {useFetchPokemon} from "../../helpers/customHooks/useFetchPokemon";
import DetailsTabs from "./components/DetailsTabs";
import NoResults from "./components/NoResults";
import "./details.scss";
import Loader from "../../containers/Loader";
import { Container } from "react-bootstrap";
export default function DetailsPage() {
  const pokemonID = useParams();
  const APIURL = "https://pokeapi.co/api/v2/";
  const url = `${APIURL}pokemon/${pokemonID.pokemonId.toLowerCase()}`;
  const [pokemonDetails, isLoading, error, pokeSpices] = useFetchPokemon(
    url,
    {},
    true
  );
  return isLoading ? (
    <Loader />
  ) : (
    <Container className="mt-5 pt-2 mb-5 ">
      <div className="px-xl-5 mx-xl-5 px-lg-2 mx-lg-2 homeCardsRow">
        <Link to="/">
          <Button className="backBtn">
            <span className="backSpan">{"<"}</span> Back
          </Button>
        </Link>
        {error !== null ? (
          <NoResults searchText={pokemonID.pokemonId} />
        ) : (
          <>
            <div className="DetailsCard mt-5">
              <div className="header">
                <img
                  alt="pokemonImage"
                  className="pokeImg"
                  src={pokemonDetails?.sprites?.front_default}
                />
                <div className="pokeName">
                  <h1>{pokemonDetails?.name}</h1>
                  <div className="pokeTypes">
                    {pokemonDetails.types?.map((type) => (
                      <Button
                        style={{ backgroundColor: pokeSpices?.color?.name }}
                        key={type?.slot}>
                        {type?.type?.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <DetailsTabs pokemonDetails={pokemonDetails} />
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
