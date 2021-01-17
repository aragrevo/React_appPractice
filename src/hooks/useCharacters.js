import { useState, useEffect } from 'react';

export const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    console.log(results);
    setCharacters(results);
  };
  useEffect(() => {
    getCharacters();
  }, [url]);
  return characters;
};
