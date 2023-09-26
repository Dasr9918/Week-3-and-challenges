import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';

/*
Hello World!

function App () {
  return <h1> Hola Mundo </h1>

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
*/

//Props
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title= "My First App"/>
  </React.StrictMode>
);

reportWebVitals();

/*
//CHALLENGE 6 

import React from 'react';
import GifGrid from './GifGrid';

function App() {
  const categories = ['Categoría1', 'Categoría2', 'Categoría3']; // Agrega tus categorías

  return (
    <div className="App">
      {categories.map((category, index) => (
        <GifGrid key={index} category={category} />
      ))}
    </div>
  );
}

export default App;
*/

