import React, { useState } from 'react' 
import './Calculadora.css'

export default function Calculadora() {

    const [operator, setOperator] = useState({opt1: 'c', opt2:'CE', opt3: '%' , opt4: '/',opt5: '*',opt6: '-',opt7: '+',opt8: '='})

    const [numero, setNumero] = useState({val1: 1, val2: 2, val3: 3, val4: 4, val5: 5, val6: 6, val7: 7, val8: 8, val9: 9, val0: 0})

    

    const handleChange = (props) =>{
        if(operator.value = operator.opt5){
           console.log('voce clicoui');
        }
        
       
        
    }

    const click = () => {

    }
    const reset = () =>{

    }
    const result = () =>{

    }





    return(
        <div id="calculator">
            
            <div id="display">
                <input id="display-input"></input>
            
            </div>

            <div id="buttons">
                
                <button value={operator.opt1} className="operator" id="clear" onClick={reset}>C</button>
                <button value={operator.opt2} className="operator" id="backspace" onClick={reset}>CE</button>
                <button value={operator.opt3} className="operator" id="%" onClick={click}>%</button>
                <button value={operator.opt4} className="operator" id="/"onClick={click}>/</button>
                <button value={numero.val7} className="number" id="7"onClick={handleChange}>7</button>
                <button value={numero.val8} className="number"id="8"onClick={handleChange}>8</button>
                <button value={numero.val9} className="number"id="9"onClick={click}>9</button>
                <button value={operator.opt5} className="operator" id="*"onClick={handleChange}>*</button>
                <button value={numero.val4} className="number" id="4"onClick={click}>4</button>
                <button value={numero.val5} className="number" id="5"onClick={click}>5</button>
                <button value={numero.val6} className="number" id="6"onClick={click}>6</button>
                <button value={operator.opt6} className="operator" id="-"onClick={click}>-</button>
                <button value={numero.val1} className="number" id="1"onClick={click}>1</button>
                <button value={numero.val2} className="number" id="2"onClick={click}>2</button>
                <button value={numero.val3} className="number" id="3"onClick={click}>3</button>
                <button value={operator.opt7} className="operator" id="+" onClick={handleChange}>+</button>
                <button value="" className="empty" id="empty"></button>
                <button value={numero.val0} className="number" id="0"onClick={click}>0</button>
                <button value="" className="empty" id="empty"></button>
                <button value={operator.opt8} className="operator" id="=" onClick={result}>=</button>

            </div>

            <div id="name">
                <h1>Calculadora</h1>
            </div>
        </div>
        
    )

}