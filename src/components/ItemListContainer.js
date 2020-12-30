import React from 'react'

function ItemListContainer(props) {
    //OBJECT SHORTHAND
    const {greeting} = props
    return(
        <>
            <p>{greeting}</p>
        </>
    )
}

export default ItemListContainer;