import React, { useContext } from "react";
import PokeLogo from "../../assets/images/pokeapiLogo.png";
import { SearchContext } from "../../helpers/contexts/SearchContext";
import SearchBar from "../SearchBar";
import "../containerStyles.scss";
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logoTitle">
        <img src={PokeLogo} alt="logo" width="120" /> <p>Pokemon Gallery</p>
      </div>
      <SearchBar />
    </div>
  );
}
