import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Product } from './Product'
import { Cart } from './Cart'
import AppBar from '@mui/material/AppBar';
import { Routes, useNavigate, Route } from 'react-router-dom'
import { ProductList } from './ProductList'



function App() {
  const [count, setCount] = useState(0)

  // const navigate = useNavigate();

  return (
    <div className="App">
      <div className='cart'>
        <Cart count={count}/>
      </div>
      <div >
        <ProductList count={count} setCount={setCount}/>
      </div>  
    </div>
  )
}

export default App
