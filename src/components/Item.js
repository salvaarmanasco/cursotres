/* import React from 'react'
 

const promesa = new Promise((resolver,rechazar)=>{

    setTimeout(()=>{

        console.log("Termino el pedido")
        
        let codigo = 200
        let resultado = ["Proteina Vegetal","Doble X","Omega 3"]

        if(codigo < 400){
            resolver(resultado)
        }else{
            rechazar("Hubo un error")
        }

    },2000)
    
})


promesa
.then((resultado)=>{
    console.log("Salio todo bien")
    console.log(resultado)
})
.catch(()=>{
    console.log("Salio todo mal")
})

 */
