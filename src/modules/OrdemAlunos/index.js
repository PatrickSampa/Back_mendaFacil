const sequence = {
    _id: 1,
    get id() {return this._id++},

}

const sequenceDel = {
    _id: 1,
    get id() {return this._id++},
}

const alunos = {};
let seq;
let seqDell;

function adicionar(aluno){
    seq = sequence.id;
    if(!aluno.id) aluno.id = seq;
    alunos[aluno.id] = aluno;
    //let idRetorno = aluno.id;
    return aluno;
}

function getAluno(id){
    return alunos[id] || {}
}

function getAll(){
    console.log(alunos)
    return Object.values(alunos);
   
}

//let verif = true;
function deletarAluno(){
    if(Object.keys(alunos).length === 0){
        console.log("entrou")
        return {}
    }else{
        console.log("entrou2")
            seqDell = sequenceDel.id;
            delete alunos[seqDell];
            return alunos;
    }
   /*  if(seqDell>seq){
        seqDell = seq
        verif = false;
        return {}
    }else{
        if(!verif){
            delete alunos[seqDell];
            return alunos;
        }else{
            seqDell = sequenceDel.id;
            delete alunos[seqDell];
            return alunos;
        }
        
    } */
    
    
}

module.exports = { adicionar, getAluno, getAll, deletarAluno}