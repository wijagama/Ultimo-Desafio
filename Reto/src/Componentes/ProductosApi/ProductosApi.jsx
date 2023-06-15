import React, { useState, useEffect } from 'react';
import './ProductosApi.css';

const ProductosApi = ({ data }) => {
  const [filtro, setFiltro] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setProductosFiltrados(data);
  }, [data]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const ordenarPorMasVendidos = () => {
    const productosOrdenados = [...productosFiltrados].sort((a, b) => b.rating.count - a.rating.count);
    setProductosFiltrados(productosOrdenados);
    setFiltro('mas-vendidos');
  };

  const ordenarPorMasCalificados = () => {
    const productosOrdenados = [...productosFiltrados].sort((a, b) => b.rating.rate - a.rating.rate);
    setProductosFiltrados(productosOrdenados);
    setFiltro('mas-calificados');
  };

  const mostrarTodos = () => {
    setProductosFiltrados(data);
    setFiltro('');
  };

  return (
    <>
      {/* Botones para seleccionar el filtro */}
      <div className='Botones'>
        <button onClick={ordenarPorMasVendidos}>Más vendidos</button>
        <button onClick={ordenarPorMasCalificados}>Más Calificados</button>
        <button className="btn btn-outline-dark m-1 btn-sm" onClick={mostrarTodos}>
          Todos
        </button>
        {/* Agrega más botones de opciones de clasificación o filtrado aquí */}
      </div>

      {/* Renderizar los elementos según el filtro seleccionado */}
      {productosFiltrados.map((item) => (
        <div className="card" key={item.id}>
          <img className="card__img" src={item.image} alt="" />
          <div className="container">
            <h2>{item.category}</h2>
            <h4>{item.title}</h4>
          </div>
          <div className="card-price-add">
            <span>Price: ${item.price}</span>
            <button onClick={handleClick}>
              {isExpanded ? '-' : '+'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductosApi;