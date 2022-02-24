// Importar AXIOS
const axios = require('axios')
const fs = require('fs');

// criar a variavel para consumir a API
const apiService = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

// Criar função para capturar os dados da API
async function getDataApi() {
    const request = await apiService.get('/character')
    createDocument(request.data)
}

getDataApi()

// Criar a função para gravar os arquivos no formato JSON
function createDocument(arquivo) {
    let dadosRecebidos = arquivo
    let nomeDoArquivo = "PersonagensRick-Morty"
    fs.writeFile( nomeDoArquivo, JSON.stringify(dadosRecebidos), "utf-8", (err) => {
        if(err) throw err;
     })
}

// ATIVIDADE 2

// Criar função para capturar os dados da API
async function getDataApiCustom() {
    const request = await apiService.get('/character/?name=rick&status=alive')
    createDocumentFormated(request.data.results)
}

getDataApiCustom()

// Criar a função para gravar os arquivos no formato JSON e formata-lo
function createDocumentFormated(arquivo) {
    let dadosRecebidos = arquivo
    let nomeDoArquivo = "PersonagensRick-Morty.json"
    fs.writeFile( nomeDoArquivo, JSON.stringify(dadosRecebidos), "utf-8", (err) => {
        if(err) throw err;
    })
}