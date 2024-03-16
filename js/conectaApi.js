//js é sincrono, então ele vai ler linha por linha, e não vai esperar nada ser resolvido
//(aysnc) declara a função assíncrona 
//await fetch, está declarando que essa função vai ser assíncrona, 
//e está mandando esperar o fetch.
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}