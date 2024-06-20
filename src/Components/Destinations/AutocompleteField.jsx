import React, { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "react-autocomplete";

const AutocompleteField = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    axios
      .get("../../../database/locations.json")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSelect = (val) => {
    setValue(val);
    setFilteredData([]);
  };

  return (
    <Autocomplete
      getItemValue={(item) => item.capital}
      items={filteredData}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.name}
          style={{ background: isHighlighted ? "lightgray" : "white" }}
        >
          {item.capital}, {item.name}
        </div>
      )}
      value={value}
      onChange={handleInputChange}
      onSelect={handleSelect}
      inputProps={{ placeholder: "Location" }}
      wrapperStyle={{ width: "90%", position: "relative" }}
      menuStyle={{
        position: "absolute",
        borderRadius: "3px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.9)",
        fontSize: "90%",
        overflow: "auto",
        minHeight: "3rem",
        maxHeight: "50%",
        zIndex: "1",
        top: "10",
        left: "0",
        width: "100%",
      }}
    />
  );
};

export default AutocompleteField;
