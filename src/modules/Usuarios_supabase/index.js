
const VerificarUserController = require('./userController.js');
const VerificarUserUseCase = require('./userUseCase.js');

const verificarUserUseCase = new VerificarUserUseCase();
const verificarUserController = new VerificarUserController(verificarUserUseCase);

module.exports.verificarUserUseCase = verificarUserUseCase;
module.exports.verificarUserController = verificarUserController;