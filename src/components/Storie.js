import React from "react";

function Storie(props){
    return(
        <div class="story">
            <div class="imagem">
              <img src={`assets/img/${props.fotoStorie}.svg`}/>
            </div>
            <div class="usuario">
              {props.nomeStorie}
            </div>
          </div>
    )
}

export default Storie;