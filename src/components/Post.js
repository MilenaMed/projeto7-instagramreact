import React from "react";

function Post() {

  const imagem = ["meowed", "barked"]
  const [curtidasCount, setCurtidasCount] = React.useState(101523);
  const [Clicksalvou, setSalvou] = React.useState("bookmark-outline");
  const [ClickLike, setLiked] = React.useState("heart-outline");

  function Marcar() {
    if (Clicksalvou == "bookmark-outline") {
      setSalvou("bookmark")
    }
    else {
      setSalvou("bookmark-outline")
    }
  }

  function Curtir() {
    if (ClickLike == "heart-outline") {
      setLiked("heart")
      setCurtidasCount(curtidasCount + 1)
    }
    else {
      setLiked("heart-outline")
      setCurtidasCount(curtidasCount - 1)
    }
  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${imagem[1]}.svg`} />
          meowed
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" onClick={Curtir} src="assets/img/gato-telefone.svg" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={Curtir} name={ClickLike}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={Marcar} name={Clicksalvou}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras {curtidasCount} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;