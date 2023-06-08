const axios = require('axios');
const getAlunos = require('./VerificarUserExistente.js')
const dotenv = require('dotenv');

async function InserirNovoAluno(id_user, senha_user){
    const URL = process.env.URL_SUPABASE;
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5c3JxZm5kZ2ZnaGl3dGxkbHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMDU5MjYsImV4cCI6MjAwMTU4MTkyNn0.nInV4PyEY-ucSQx83H1QfMfDwLfrPKYMoC9PGZLlIWI'
    const headers = {
        'apikey': `${key}`,
        'Content-Type': 'application/json'
    };
    const data = [
        {"id_user": `${id_user}`, "senha_user": `${senha_user}`},
    ];
    const AlunoJaCad = await getAlunos.UserExistente(id_user);
    console.log(AlunoJaCad)
    if(AlunoJaCad == false){
        //Inserir Novo Aluno
        const response = axios.post(URL, data, {headers});
        const inf = response.data;
        return data;
    }else{
        return []
    }
}

module.exports = { InserirNovoAluno }