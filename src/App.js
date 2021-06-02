import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result =
        await axios.get(/*'http://gateway.marvel.com/v1/public/characters', {
        Params: {
          "apikey": "your api key",
          "ts": "a timestamp",
          "hash": "your hash"
        },
        Headers: {
          "Accept-Encoding": "gzip"
        }
      }*/);

      //might have to place this outside the function to access and display variables
      const metaData = result.data.results[0];
      const { thumbnail } = metaData;

      //place in render for copyright
      //<p>{result.copyright}</p>
      //<p>{result.attributionText}</p>
      //<p>{result.attributionHTML}</p>

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="Container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
