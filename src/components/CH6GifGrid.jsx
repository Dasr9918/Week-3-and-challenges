import React, { useState, useEffect } from 'react';
import GifItem from './GifItem'; //Componente GifItem

function GifGrid({ category }) {
  const [gifs, setGifs] = useState([]);

  // Crea una nueva función asíncrona para obtener gifs
  const getGifs = async () => {
    // Llama a una API o realiza cualquier operación asíncrona necesaria para obtener gifs
    const response = await fetch('https://api.example.com/getGifs');
    const data = await response.json();
    return data;
  };

  // Invoca la nueva función creada anteriormente
  const fetchGifs = async () => {
    const gifsData = await getGifs();
    console.log(gifsData); // Imprime la lista de gifs en la consola
    setGifs(gifsData); // Actualiza el estado con los gifs obtenidos
  };

  // Utiliza useEffect para llamar a la nueva función creada en el punto 2
  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <div className="gif-grid">
      <h2>{category}</h2>
      <div className="gif-list">
        {gifs.map((gif, index) => (
          <GifItem key={index} gif={gif} />
        ))}
      </div>
    </div>
  );
}

export default GifGrid;

