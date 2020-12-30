import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <Header/>
      <ItemListContainer greeting="Gracias por visitarnos"/>
      <NavBar/>
      <Footer/>
    </>
  );
}

export default App;
