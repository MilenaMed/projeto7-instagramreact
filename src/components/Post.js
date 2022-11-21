import React from "react";

function Post(props) {

  const [curtidasCount, setCurtidasCount] = React.useState(props.curtidas);
  const [Clicksalvou, setSalvou] = React.useState("bookmark-outline");
  const [ClickLike, setLiked] = React.useState("heart-outline");
  const [MudarCor, setCor] = React.useState("black");

  function Marcar() {
    if (Clicksalvou == "bookmark-outline") {
      setSalvou("bookmark")
    }
    else {
      setSalvou("bookmark-outline")
    }
  }
  function CurtirImag() {
    if (ClickLike == "heart-outline") {
      setLiked("heart")
      setCor("vermelho")
      setCurtidasCount(curtidasCount + 1)
    }
  }

  function Curtir() {
    if (ClickLike == "heart-outline") {
      setLiked("heart")
      setCor("vermelho")
      setCurtidasCount(curtidasCount + 1)
    }
    else {
      setLiked("heart-outline")
      setCurtidasCount(curtidasCount - 1)
      setCor("preto")
    }
  }

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.imagemPerfil}.svg`} />
          {props.nomeUsuário}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" onDoubleClick={CurtirImag} src={props.postagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={Curtir} name={ClickLike} class={MudarCor}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={Marcar} name={Clicksalvou}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.imagemPerfilCurtiu}.svg`}/>
          <div class="texto">
            Curtido por <strong>{props.nomePerfilCurtiu}</strong> e <strong data-test="likes-number"> outras {curtidasCount} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;