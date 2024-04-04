import { conectaApi } from "./conectaApi.js";
import constroiCard  from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVieo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); 
    }
    //enquanto a lista tiver um primeiro filho (algo nela) remove o primeiro da lista

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) 
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]"); //seleciona o botao

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento)) //adc evento de click no botao, evento é o click