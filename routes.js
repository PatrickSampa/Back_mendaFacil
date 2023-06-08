
const express = require('express')

const router = express.Router();
const alunos = require('./src/modules/OrdemAlunos/index')
const login = require('./src/modules/Usuarios_supabase/LoginUser.js');


router.get('/alunos', (req, res) =>  res.send(alunos.getAll()));

router.get('/BuscarAlunos/:id', (req, res) => res.send(alunos.getAluno(req.params.id)));

router.post('/Adicionaralunos', (req, res) => {
    const aluno = alunos.adicionar({
        nome: req.body.nome,
        nu_matri: req.body.nu_matri
    })
    res.send(aluno);
    /* res.send({id: aluno}) */
});

router.get('/delAluno', (req,res) => res.send(alunos.deletarAluno()))

router.get('/login', async (req,res) => {
    const authLogin = await login.getDataFromAPI(req.body.id_user, req.body.senha_user);
    console.log(authLogin);
    if(authLogin == undefined){
        res.send({});
    }else{
        res.send(authLogin);    
    }
    
})





module.exports = router 