import logo from './logo.svg';
import './App.css'
import Exemplo from './components/Exemplo';

function App() {
  return (
   
   <Exemplo/>
  );
}

export default App;
















import image from '';
import Exemplo from './components/Projeto';



function App() {
  return (
    <div>
      <header>
        <img src={image}  />
        <Cabeçalho/>    
        </header>

        <body>
          <Principal/>
        </body>
       
       <footer>
        <Rodape/>
       </footer>
    </div>
  );
}

export default App;





















Cabeçalho,jsx

import React from "react";
let estilo = {alignSelf: center,}
const Cabeçalho = () =>{
return(
    <>
        <h1 style={estilo}>Aprendendo React</h1>
        <button>Botão1</button>
        <button>Botão2</button>
        <button>Botão3</button>
    </>
);
}

export default Cabeçalho;














Principal.jsx



import React from "react";
let estilo = {backgroundColor: 'orange, color:'purple', fontSize: '2rem'}
let image = {}
const Principal = () =>{
return(
    <>
        <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>
        <ol>
          <li><img style={image} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FOppenheimer_%2528filme%2529&psig=AOvVaw0ffgVEarVBq19i6eO_pABD&ust=1700424177103000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCIi-8OCrzoIDFQAAAAAdAAAAABAD'></img></li>
          <li>Django livre</li>
          <li>Como pétalas que caem</li>
          <li>Kill Bill</li>
          <li>Onde os fracos não tem vez</li>
        </ol>
   
   
    </>
);
}

export default Principal;

















Rodape.jsx


import React from "react";

let rorodadapepe = {alignSelf: center,}
const Rodape = () =>{
return(
    <>
       <p style={rorodadapepe}> Leandro Jun Sakai Takara 2023&copy; </p> 
    </>
);
}

export default Rodape;
