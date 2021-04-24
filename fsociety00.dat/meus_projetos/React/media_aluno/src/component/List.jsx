import React, {useState, useRef} from 'react'
import '../layout/style.css'


function List() {

    const formRef = useRef(null)

    const [alunos, setAlunos]= useState([])

    const [aluno, setAluno] = useState({nome:'', p1:'', p2:'', trab:'', media:0 });
    
    const [media, setMedia] = useState();

    const [error, setError] = useState('')

    

    const handleSubmit = () =>{
      
      
      var total = parseInt(aluno.p1) + parseInt(aluno.p2) + parseInt(aluno.trab) 
      var mediascope =  parseInt(total/3)
      setAlunos((oldValue)=> [...oldValue, aluno] )
      setAluno((oldValue)=> {
        oldValue.media = mediascope
        return oldValue
      })
      
      if(aluno.nome === 0){
        return(
          alert('Insira um nome válido')
        )

      }else{
        
      }

      if(aluno.p1 > 10){
        return(
          alert('Insira um valor de prova válido. (0-10)')
        )
      }else{
        
      }
      
      if(aluno.p2 > 10){
        return(
          alert('Insira um valor  de prova valido. (0-10)')
        )
      }else{
        
      }
      if(aluno.trab > 10){
        return(
          alert('Insira um valor de trabalho valido. (0-10)')
        )
      }else{
        
      }
      
    }
      
    const handleChange = (e) =>{
      
      setAluno(function(oldValue){
        return{...oldValue, [e.target.name] : e.target.value}
      })
    }

    
  console.log(aluno.p1)
    return (
      
        <>
        <div className="input-box"> 

          <div className="inputs">
        
            <p> <input type="text" placeholder="Nome do aluno:" id="input" value={aluno.nome} name='nome' onChange={handleChange}></input></p>
      
            <p> <input type="number" placeholder="Nota da prova 1:" id="input" value={aluno.p1} name='p1' onChange={handleChange}></input></p>

            <p> <input type="number" placeholder="Nota da prova 2:" id="input" value={aluno.p2} name='p2' onChange={handleChange}></input></p>

            <p><input type="number" placeholder="Nota do trabalho: " id="input" value={aluno.trab} name='trab' onChange={handleChange}></input></p>
        
          </div>
          
         <    p><button type="submit" onClick={handleSubmit}>Verificar</button></p>
        

        

        { 
          alunos.map((obj, index) => {
            
            return(

              <ul className="list-return" key={index}>
              <li><b>Aluno:</b> <b>{obj.nome} </b></li>
              <li><b>NOTAS: </b></li>
              <li>Prova 1: <b>{obj.p1}</b> Pontos</li>
              <li>Prova 2: <b>{obj.p2}</b> Pontos</li>
              <li>Trabalho: <b>{obj.trab}</b> Pontos</li>
              <li>Média do aluno foi:<b>{obj.media}</b> Pontos</li>
              </ul>
              
            )
          })
        }

        
       
        </div> 
      </>
    );
  }
  
  export default List;
