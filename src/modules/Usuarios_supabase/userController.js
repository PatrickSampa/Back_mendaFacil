/* import { Request, Response } from 'express';
import { VerificarUserUseCase } from './userUseCase'; */

const Request = require('express');
const Response = require('express');
const UserCase = require('./index')

 class VerificarUserController {
    constructor(verificarUserUseCase,) { }
    async handle(request, response) {
        const { id_user, password_user } = request.body;
        try {
            const result = await UserCase.verificarUserUseCase.execute({ id_user, password_user })
            response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}
module.exports =  VerificarUserController 