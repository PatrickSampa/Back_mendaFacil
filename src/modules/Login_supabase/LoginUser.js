const axios = require('axios');
const validalogin = require('./validarLogin.js')

async function getDataFromAPI(id_user, senha_user) {
    try {
      const config = {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5c3JxZm5kZ2ZnaGl3dGxkbHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMDU5MjYsImV4cCI6MjAwMTU4MTkyNn0.nInV4PyEY-ucSQx83H1QfMfDwLfrPKYMoC9PGZLlIWI'
        }
      };
  
      const response = await axios.get('https://tysrqfndgfghiwtldlxa.supabase.co/rest/v1/alunos', config);
      const data = response.data;
      /* console.log(data) */
      const resp = await validalogin.VerificarUser(data,id_user, senha_user)
      console.log('Dados da API:', id_user, senha_user);
      return resp
    } catch (error) {
      return error;
    }
  }

  module.exports = { getDataFromAPI }