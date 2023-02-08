import React, { useContext } from "react";
import { Tabs } from "antd";
import TabTable from "./TabTable";
export default function DetailsTabs(props) {

  const tabsItems = [
    {
      key: "1",
      label: `STATS`,
      url: "",
      children: <TabTable label="stats" pokemonDetails={props.pokemonDetails['stats']} />,
    },
    {
      key: "2",
      label: `MOVES`,
      url: "",
      children: <TabTable label="moves" pokemonDetails={props.pokemonDetails['moves']} />,
    },
    {
      key: "3",
      label: `ABILITIES`,
      url: "",
      children: <TabTable label="abilities" pokemonDetails={props.pokemonDetails['abilities']} />,
    },
  ];
  const onChange = (key) => {
    tabsItems.filter((tab) => tab.key == key);
  };

  return (
      <Tabs defaultActiveKey="1" items={tabsItems} onChange={onChange} />
  );
}
