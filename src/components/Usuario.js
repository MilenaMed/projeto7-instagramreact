import React from "react";

function Usuario(){
    function Editar(){
        prompt("Qual o nome")
    }
    return(
        <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            Catana
            <ion-icon onClick={Editar} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}

export default Usuario;