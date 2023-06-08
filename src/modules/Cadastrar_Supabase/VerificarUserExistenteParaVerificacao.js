
async function VerificarUserExistente(ArrayUser,id_user){
    /* const user = ArrayUser.find((user) => user.id_user == '20200796404' && user.senha_user == 'admin');  */
    const user = ArrayUser.find((user) => user.id_user == id_user);
/*     console.log(user)
    console.log("User: " + JSON.stringify(user)); */
     if(user != undefined){
        return false
     }else{
        return true
     }



}

module.exports = { VerificarUserExistente }