
const express = require('express')

const router = express.Router();
const alunos = require('./src/modules/OrdemAlunos/index')
const Users = require('./src/modules/Usuarios_supabase/index.js')


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


router.post('/user', async (req, res) => {
    return Users.verificarUserController.handle(req, res);
}) 



module.exports = router 