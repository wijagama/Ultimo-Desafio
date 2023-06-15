
import React, { useEffect , useState } from 'react';
import Navbar from './Componentes/Navbar/Navbar.JSX';
import ProductosApi from './Componentes/ProductosApi/ProductosApi.JSX';
import './Style.css'

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);
  
  
  
  return (
    <>
     <Navbar/>
      <h1>API Data</h1>
      <div className="card__body">
      <ProductosApi data={data}  />
      </div>
    
    </>
  );
}

export default Home;