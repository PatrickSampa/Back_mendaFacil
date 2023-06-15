const sequence = {
    _id: 1,
    get id() {return this._id++},
    reset() { this._id = 1 }
}

const sequenceDel = {
    _id: 1,
    get id() {return this._id++},
    reset() { this._id = 1 }
}

let alunos = {};
let seq;
let seqDell;


function adicionar(aluno){
    console.log(aluno)
    const matriculaId = aluno['nu_matri'];
    const IdJaExistente = Object.values(alunos).some(objeto => objeto.nu_matri === matriculaId);
    if(IdJaExistente) return {}
    seq = sequence.id;
    if(!aluno.id) aluno.id = seq;
    alunos[aluno.id] = aluno;
    //let idRetorno = aluno.id;
    return aluno;
}


function resetar(){
    alunos = {};
    sequence.reset();
    sequenceDel.reset();
    return alunos
}



function getAluno(id){
    return alunos[id] || {}
}

function getAll(){
    console.log(Object.values(alunos))
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

module.exports = { adicionar, getAluno, getAll, deletarAluno, resetar}