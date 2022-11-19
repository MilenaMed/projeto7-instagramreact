import React from "react";
import Storie from "./Storie";

function Stories(){
    return(
        <div class="stories">
            <Storie/>
            <Storie/>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}

export default Stories;