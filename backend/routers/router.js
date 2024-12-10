const Usuario = require("./controllers/cadastrarUser")

const api = require("express").Router()
/**
 * @swagger
 * /cadastrar:
 *   post:
 *     summary: Cadastrar um novo usuário
 *     description: Registra um novo usuário no sistema após validar nome, email e garantir que o email não esteja em uso.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *                 example: "João Silva"
 *               email:
 *                 type: string
 *                 description: Email do usuário
 *                 example: "joao.silva@email.com"
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: string
 *                   example: "Usuario cadastrado com sucesso!"
 *       400:
 *         description: Erro de validação (campo faltando ou email inválido).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Por favor informe os inputs acima."
 *       500:
 *         description: Erro ao cadastrar usuário ou ao verificar email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "falha ao cadastrar usuario, tente novamente mais tarde."
 */
api.post(`/cadastrar`,Usuario.cadastrarusuario )

module.exports = api