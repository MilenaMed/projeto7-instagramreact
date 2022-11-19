import React from "react";
import Sugestao from "./Sugestao";

function Sugestoes(){
    return(
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          <Sugestao/>
          <Sugestao/>
      </div>
    )
}

export default Sugestoes;