const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
/* const alunos = require('./src/modules/OrdemAlunos/index') */
const bodyParser = require('body-parser');
/* const Users = require('./src/modules/Usuarios_supabase/index.js') */
const app = express();

const router = require('./routes.js')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.API_PORT || 3001;

//rotas
app.use('/ifpa', router)

app.listen(PORT, () => console.log("API runing in PORT " + PORT));
