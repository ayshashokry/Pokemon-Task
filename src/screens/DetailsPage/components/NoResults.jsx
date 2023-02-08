import React, { useContext } from "react";
import noResults from "../../../assets/images/noResults.jpg";
export default function NoResults(props) {

  return (
    <div className="noResultsPage mt-3 pt-5">
      {props.resuestError ? (
        <>
          <h3>Server down</h3>
          <p>Try again later...</p>
        </>
      ) : (
        <>
          <img src={noResults} alt="noResult" />
          <h3>We didn't find any match for "{props.searchText}"</h3>
          <p>Try changing the search terms</p>
        </>
      )}
    </div>
  );
}
