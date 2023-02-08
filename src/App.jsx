import { useState } from "react";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import DetailsPage from "./screens/DetailsPage";
import NavBar from "./containers/NavBar";
import { SearchContext } from "./helpers/contexts/SearchContext";
import Page404 from "./containers/Page404";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<DetailsPage />} />
        <Route path="/pokemon/:pokemonId" element={<DetailsPage />} />
        <Route  path="/*" element={<Page404/>}/>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
