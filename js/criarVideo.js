import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

//as funções que estão conectadas com a Api são assincronas e são declaradas 
//pelo async e await então elas retorna uma promise, e não teria acesso aqui 
//até que a promise fosse resolvida, então é necessário transformar essa em assincrona tbm
async function criarVideo(evento) {
    evento.preventDefault(); //evita carregamento da página
    
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem); //parâmetros enviados na mesma ordem que na criaVideo

        window.location.href = "../pages/envio-concluido.html"; 
    //feedback caso tenha dado certo, redirecionar a pag quando o envio é feito com sucesso
    } catch (e) { //mensagem de erro do throw new Error, no arquivo conectaApi 
        alert(e);
    }
   
}

formulario.addEventListener("submit", evento => criarVideo(evento));