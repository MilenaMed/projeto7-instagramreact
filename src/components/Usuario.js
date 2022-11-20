import React from "react";

function Usuario(){
  const [nomeUsuário, setNome] = React.useState("Catana")
  const [UsuarioImg, setImg] = React.useState("assets/img/catanacomics.svg")

    function Editar(){
      let novoNome = prompt("Qual o novo nome?")
      setNome(novoNome)
    }

    function EditarImg(){
      let novaImg = prompt("Insira a URL da imagem")
      setImg(novaImg)
    }
    
    return(
        <div data-test="user" class="usuario" >
        <img data-test="profile-image" onClick={EditarImg} src={UsuarioImg} />
        <div class="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
          {nomeUsuário}
            <ion-icon data-test="edit-name" onClick={Editar} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}

export default Usuario;