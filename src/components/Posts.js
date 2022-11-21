import React from "react";
import Post from "./Post";

function Posts(){
   
    return(
    <div class="posts">
          <Post imagemPerfil="meowed" postagem="assets/img/gato-telefone.svg" nomeUsuário="meowed" curtidas= {101523} nomePerfilCurtiu = "responde.ai" imagemPerfilCurtiu="respondeai"/>
          <Post imagemPerfil="barked" postagem="assets/img/dog.svg" nomeUsuário="barked"  curtidas= {206824} nomePerfilCurtiu = "adorable_animals" imagemPerfilCurtiu="adorable_animals"/>
        </div>
        )
}

export default Posts;