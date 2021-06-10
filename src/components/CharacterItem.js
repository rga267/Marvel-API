import React from "react";

const CharacterItem = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <a href={`${item.urls[1].url}`}>
                <strong>Learn More</strong>
              </a>
            </li>
          </ul>
          <sup>Data provided by Marvel. © 2021 MARVEL</sup>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
