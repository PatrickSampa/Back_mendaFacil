const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
const { LocalStorage } = require('node-localstorage');


 class VerificarUserUseCase {

    async execute({ id_user, password_user }){
        //NÃO FOI POSSIVEL IMPLEMENTAR
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5c3JxZm5kZ2ZnaGl3dGxkbHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMDU5MjYsImV4cCI6MjAwMTU4MTkyNn0.nInV4PyEY-ucSQx83H1QfMfDwLfrPKYMoC9PGZLlIWI';
        const URL = `https://tysrqfndgfghiwtldlxa.supabase.co/rest/v1/alunos`
        

        const supabase = createClient(URL, authToken);

            const { data, error } = await supabase
              .from('users')
              .select('*');
          
            if (error) {
              console.error('Erro ao obter os usuários:', error);
              return;
            }
          
            console.log('Usuários:', data);
          


    }
}

module.exports =  VerificarUserUseCase 