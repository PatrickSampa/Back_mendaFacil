
async function VerificarUser(ArrayUser,id_user, senha_user){
        /* const user = ArrayUser.find((user) => user.id_user == '20200796404' && user.senha_user == 'admin');  */
        const user = ArrayUser.find((user) => user.id_user == id_user && user.senha_user == senha_user);
         if(user != undefined){
            return user
         }else{
            return undefined
         }

    
    //console.log("User: " + JSON.stringify(user));
}

module.exports = { VerificarUser }