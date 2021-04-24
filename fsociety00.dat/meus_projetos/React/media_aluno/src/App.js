import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Title from './component/Title'
import Card from './component/Card'
// import Media from './component/Media'
import List from './component/List'
// import Acesso from './component/Acesso'
import Divulga from './component/Divulga'


function App() {

  

  return (
    <div className="App">

      <Title title="Olá Professor!" subtitle="Você está vendo uma aplicação feita pelo DEV Erick Batista Cinigalia">
        <p>Aqui você pode verificar a média dos seus alunos com muita facilidade.</p>
        <p>Primeiro: Coloque os valores corretamente, as notas vão apenas de 0-10.</p>
        <p>Segundo: A cada vez que você clicar em verificar vai gerar um resumo com a media de um aluno.<br></br> Se quiser fazer de mais um aluno é só colocar as informações denovo.</p>

      
      </Title>
      <Card title="Boletim" >Área do professor</Card>
      {/* <Acesso /> */}
      {/* <Media></Media> */}
      <List />
      <Divulga >
        <p>Está gostando? Deixe seu feedback nas redes sociais do desenvolvedor:</p>
        <p><b>Instagram: </b>@_erick.skt</p>
        <p><b>Linkedin: </b>Erick Batista Cinigalia</p>
        <p><b>Facebook: </b>Erick Batista</p>
      </Divulga>
     

    </div>
  );
}

export default App;
