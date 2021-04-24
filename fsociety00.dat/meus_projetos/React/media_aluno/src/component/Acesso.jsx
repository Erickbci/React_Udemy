import React from 'react'
import '../layout/style.css' 

function Acesso(){


    const handleClick = () =>{
        window.alert('Voce clicou')
    }

    return(
        <>
        <button id="botao" onClick={handleClick}></button>
        </>
    )

}
export default Acesso