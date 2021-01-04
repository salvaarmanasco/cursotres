import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {

  const [contador, setContador] = useState(0)

  const aumentarContador = () => {
    setContador(contador + 1)
  }
  const restarContador = () => {
    setContador(contador -1)
  }
  const resetearContador = () => {
    setContador(0)
  }
  return (
    <>
      <Header/>
      <ItemListContainer greeting="Gracias por visitarnos"/>
      <NavBar/>
      <p>Contador: { contador } </p>
      <button className='btn-outline-success' onClick={ aumentarContador }>+</button>
      <button className='btn-outline-warning' onClick={resetearContador} >Resetear</button>
      <button className='btn-outline-success' onClick={restarContador}>-</button>
      <Footer/>
    </>
  );
}
