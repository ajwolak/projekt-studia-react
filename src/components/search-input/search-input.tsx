import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { SearchInputProps } from "./search-input";

export const SearchInput = ({ items }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([""]);
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
    setShow(!!value);
  };

  const handleItemSelect = (item) => {
    setQuery(item);
    setShow(false);
  };

  return (
    <div>
      <Dropdown show={show} onToggle={() => setShow(false)}>
        <FormControl
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Wpisz frazę..."
        />

        <Dropdown.Menu style={{ width: "220px" }}>
          {results.length > 0 ? (
            results.map((item, index) => (
              <Dropdown.Item key={index} onClick={() => handleItemSelect(item)}>
                {item}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item disabled>Brak wyników</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
