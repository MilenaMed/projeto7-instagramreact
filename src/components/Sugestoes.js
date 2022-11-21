import React from "react";
import Sugestao from "./Sugestao";

function Sugestoes(){
  const usuarioSugestao= [
    "smallcutecats",
    "chibirdart",
    "adorable_animals",
    "razoesparaacreditar",
    "bad.vibes.memes"
  ]
    return(
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          <Sugestao usuarioSugestao ="smallcutecats" imagemSugestao="smallcutecats"/>
          <Sugestao usuarioSugestao ="chibirdart" imagemSugestao="chibirdart"/>
          <Sugestao usuarioSugestao ="adorable_animals" imagemSugestao="adorable_animals"/>
          <Sugestao usuarioSugestao ="razoesparaacreditar" imagemSugestao="razoesparaacreditar"/>
          <Sugestao usuarioSugestao ="bad.vibes.memes" imagemSugestao="bad.vibes.memes"/>
      </div>
    )
}

export default Sugestoes;