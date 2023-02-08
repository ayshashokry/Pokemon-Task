import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import * as exports from "../src/helpers/customHooks/useFetchPokemon";
import PokemonCard from "../src/screens/HomePage/components/PokemonCard";
const mocked_data = {
  items: [
    {
      id: 1,
      name: "name",
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "mocked url" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "mocked url" },
        },
      ],
      sprites: { front_default: "mock data" },
      url: "mocked url",
    },
    ,
    ,
    { flavor_text_entries: [{ flavor_text: "mock data" }] },
  ],
};

describe("Pokemon Card", () => {
  test("it should render correctly", () => {
    vi.spyOn(exports, "useFetchPokemon").mockReturnValue(mocked_data?.items);
    const element = render(
      <MemoryRouter>
        <PokemonCard pokemon={mocked_data?.items[0]} />
      </MemoryRouter>
    );
    expect(element).toMatchSnapshot();
  });
});
