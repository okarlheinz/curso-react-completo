import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData(); 
  }, []);

  console.log(products);

  return (
    <>
      <h1>Lista de produtos</h1>
    </>
  )
}

export default App
