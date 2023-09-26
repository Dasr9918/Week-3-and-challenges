import React from 'react';

function GifItem({ gif }) {
  return (
    <div className="gif-item">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
}

export default GifItem;
