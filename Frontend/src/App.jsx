
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts]= useState([]);
  const [error, setError]= useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    (async ()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('./api/products')
        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

  }, [])

  if (error){
    return <h1>Something Went Wrong</h1>
  }

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>API in React</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
