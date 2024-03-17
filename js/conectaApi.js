//js é sincrono, então ele vai ler linha por linha, e não vai esperar nada ser resolvido
//(aysnc) declara a função assíncrona 
//await fetch, está declarando que essa função vai ser assíncrona, 
//e está mandando esperar o fetch.
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

//estrutura de função assincrona, faz conexao com a API e cria uma requisição POST
//(cadastra coisas novas na api) e exportou pra usar em outros arquivos
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `{$descricao} mil visualizações`,
            url:url,
            imagem: imagem
        })
    });
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo
}