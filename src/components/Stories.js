import React from "react";
import Storie from "./Storie";

function Stories(){
  
    return(
        <div class="stories">
            <Storie fotoStorie="9gag" nomeStorie="9gag"/>
            <Storie fotoStorie="nathanwpylestrangeplanet" nomeStorie="nathanwpylestrangeplanet"/>
            <Storie fotoStorie="filomoderna" nomeStorie="filomoderna"/>
            <Storie fotoStorie="memeriagourmet" nomeStorie="memeriagourmet"/>
            <Storie fotoStorie="wawawicomics" nomeStorie="wawawicomics"/>
            <Storie fotoStorie="barked" nomeStorie="barked"/>
            <Storie fotoStorie="meowed" nomeStorie="meowed"/>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}

export default Stories;