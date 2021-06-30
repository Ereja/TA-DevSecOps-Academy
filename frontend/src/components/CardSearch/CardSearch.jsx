import { useState } from "react";
import { Input } from "antd";
import Card from "../Card/Card";
import "./CardSearch.css";

import React from "react";

const CardSearch = ({ cards }) => {
  const [search, setSearch] = useState("");

  const searchChange = e => setSearch(e.target.value);

  //   .startsWith() is case sensitive, if someone searches for "card" instead of "Card", they will find nothing. Capitalising first letter fixes the issue
  const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const displayedCards = cards.filter(
    card => !search || card.title.startsWith(capitalizeFirstLetter(search))
  );

  return (
    <>
      <div className="card-container-searchbar center-items">
        <Input placeholder="Filter Cards" onChange={searchChange} />
      </div>
      <div className="card-container">
        {displayedCards.map(card => (
          <Card
            key={card.description}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default CardSearch;
