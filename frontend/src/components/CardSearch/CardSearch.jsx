import { useState } from "react";
import { Input } from "antd";
import Card from "../Card/Card";
import "./CardSearch.css";

import React from "react";

const CardSearch = ({ cards }) => {
  const [search, setSearch] = useState("");

  const searchChange = e => setSearch(e.target.value);

  const displayedCards = cards.filter(
    card => !search || card.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <div className="card-container-searchbar center-items">
        <Input
          placeholder="Filter Cards"
          onChange={searchChange}
          data-testid="search-input"
        />
      </div>
      <div className="card-container" data-testid="card-container">
        {displayedCards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default CardSearch;
