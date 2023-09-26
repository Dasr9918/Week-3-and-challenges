import React, { useState } from 'react';

function CH5App() {
  //Definir el estado para la categoría y la lista de categorías
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  //Manejar el evento onChange del input para obtener cambios en la entrada
  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  //Agregar una categoría a la lista
  const addCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory(''); //Limpiar el campo de entrada después de agregar una categoría
    }
  };

  return (
    <div>
      <h1>Lista de Categorías</h1>
      {/*Input controlado por el estado */}
      <input
        type="text"
        placeholder="Escribe una categoría"
        value={category}
        onChange={handleInputChange}
      />
      <button onClick={addCategory}>Agregar Categoría</button>

      <ul>
        {/*Mostrar la lista de categorías */}
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default CH5App;