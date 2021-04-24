import React, {useState} from 'react' 
import './Mega.css'

export default (props) =>{
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0))
    
    const gerarNumerosNaoContido = (array) =>{
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min) + min)
        
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero

    }

    const sortear = () =>{
        const novoArray = Array(props.qtdeNumeros)
            .fill(0)
            .reduce((a, e) =>{
                const novoNumero = gerarNumerosNaoContido(a)
                return  [...a, novoNumero]
               
            }, [])
            
            .sort((a, b) => a - b)
        setNumeros(novoArray)

    }
    return(
        <div>

            <h1 className="titulo">{props.title}</h1>

            <div className="mega-div">
                <h2>Mega Sena</h2>
                <h1>{numeros.join(' ')}</h1>
                <button onClick={sortear}>Sortear</button>
            </div>
        </div>
       
    )
}