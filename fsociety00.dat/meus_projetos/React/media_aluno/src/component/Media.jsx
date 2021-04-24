import React, {useState} from 'react'


function Media() {

    const [aluno, setAluno] = useState('');
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [trab, setTrab] = useState('');
    const [bonus, setBonus] = useState('');
    var total = p1 + p2 + trab + bonus
    const [media, setMedia] = useState();
    
    const handleSubmit = () =>{
      setMedia(parseInt(total/3))
    }  
   
  
    return (
      
        <>
        <p><input type="text" placeholder='Nome do aluno' value={aluno} onChange={ (e)=> {setAluno(e.target.value)}}></input></p>
  
        <p><input type="text" value={p1} onChange={ (e)=> {setP1(parseInt(e.target.value))}}></input></p>
  
        <p><input type="text" value={p2} onChange={ (e)=> {setP2(parseInt(e.target.value))}}></input></p>
  
        <p><input type="text" value={trab} onChange={ (e)=> {setTrab(parseInt(e.target.value))}}></input></p>
  
        <p><input type="text" value={bonus} onChange={ (e)=> {setBonus(parseInt(e.target.value))}}></input></p>
  
        <p><button onClick={handleSubmit}>Enviar</button></p>
  
        <p><b>NOTAS: </b>{aluno}</p>
  
        
             <p>Prova 1: {p1}</p>
             <p>Prova 2: {p2}</p>
             <p>Trabalho: {trab}</p>
             <p>Bonus: {bonus}</p>
             <p>Média do aluno foi:{media}</p>
        
      </>
    );
  }
  
  export default Media;
