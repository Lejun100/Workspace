import React from "react";
let estilo = {p: 'fontSize = 2rem', listStyle:'none', color:'#993399'}
const Principal = () =>{
return(
    <>
        
        <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>

        <ul style={estilo}>
            <img src="https://upload.wikimedia.org/wikipedia/pt/5/5b/Oppenheimer_poster.jpg"></img>
          <li>Django livre</li>
          <li>Como pétalas que caem</li>
          <li>Kill Bill</li>
          <li>Onde os fracos nao tem vez</li>
          
        </ul>
        
    </>
);
}

export default Principal;