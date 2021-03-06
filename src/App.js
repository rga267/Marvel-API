import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterGrid from "./components/CharacterGrid";
import "./App.css";

const md5 = require("md5");
const privatekey = process.env.REACT_APP_MARVEL_API_KEY;
const publickey = "c95846b2649509acba50c2ac22dc84bb";
const timestamp = Date.now();
const hash2 = md5(timestamp + privatekey + publickey);

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("h");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}`,
        {
          params: {
            apikey: publickey,
            ts: timestamp,
            hash: hash2,
            limit: 20,
          },
        }
      );

      console.log(result.data);
      setItems(result.data.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
