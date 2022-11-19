import React from "react";

function Post(){
    function Marcar(){
        alert("marcou")
    }

    function Curtir(){
        alert("curtiu")
    }

    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/meowed.svg" />
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onClick={Curtir} src="assets/img/gato-telefone.svg" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon onClick={Curtir} name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick={Marcar} name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Post;