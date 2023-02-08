import React, { useContext } from "react";
import { Form, Input } from "antd";
import { SearchContext } from "../helpers/contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { Search } = Input;
  const { searchText, setSearchText } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <Form.Item
      className="navSearch"
      rules={{
        pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
        message: "",
      }}>
      <Search
        placeholder="...Search"
        onSearch={(value) => {
          setSearchText(value?.toLowerCase());
          navigate(`/pokemon/${value}`);
        }}
        style={{
          width: 200,
        }}
      />
    </Form.Item>
  );
}
