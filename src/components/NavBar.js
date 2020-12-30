import React from 'react'
import CartWidget from './CartWidget'

function NavBar(){
    return(
        <>
            <nav>
                <CartWidget/>
                <a href="">¿Quienes somos?</a>
                <a href="">Productos</a>
                <a href="">Historia</a>
                <a href="">Compras</a>
            </nav>
        </>
    )
}

export default NavBar;