import React from "react";

function Sugestao(props){
    return(
        <div class="sugestao">
          <div class="usuario">
            <img src={`assets/img/${props.imagemSugestao}.svg`}/>
            <div class="texto">
              <div class="nome">{props.usuarioSugestao}</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
    )
}

export default Sugestao;