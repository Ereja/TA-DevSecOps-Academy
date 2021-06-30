import { useState } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

import "./card.css";

import React from "react";

const Card = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(currentState => !currentState);

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <div className="card-top">
        <span>{title}</span>
        <div>
          {expanded ? (
            <UpOutlined onClick={toggleExpand} data-testid="UpArrow" />
          ) : (
            <DownOutlined onClick={toggleExpand} data-testid="DownArrow" />
          )}
        </div>
      </div>
      <div
        className={`center-items card-extension ${
          expanded ? "card-expanded" : ""
        }`}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
