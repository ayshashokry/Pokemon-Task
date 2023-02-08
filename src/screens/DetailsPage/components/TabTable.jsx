import React, { useEffect, useState } from "react";

export default function TabTable(props) {
  const [data, setData] = useState([]);
  // const [movesURL, setMoveURL] = useState("");
  // const [movesArray, fetchData] = useFetchPokemon(movesURL, {});

  useEffect(() => {
    setData(props.pokemonDetails);
    // if (props.label == "moves") {
    //   props.pokemonDetails?.map((move) => {
    //     // fetchData(move.move?.url);
    //   });
    // }
  }, [props.pokemonDetails]);
  return (
    <table className="tabsTable">
      <tbody>
        {data?.length > 0 &&
          data.map((element, index) => (
            <tr key={index}>
              <th>
                {props.label == "stats"
                  ? element?.stat?.name
                  : props.label == "abilities"
                  ? element?.ability?.name
                  : element?.move?.name}
              </th>
              <td>
                {props.label == "stats"
                  ? element?.base_stat
                  : props.label == "abilities"
                  ? element?.slot
                  : ""}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
