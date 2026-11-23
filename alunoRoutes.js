
const express = require('express');
const router = express.Router();

const alunoController = require('../controllers/alunoController');

// Listar alunos
router.get('/', alunoController.listarAlunos);

// Cadastrar aluno
router.post('/', alunoController.cadastrarAluno);

// Atualizar aluno
router.put('/:id', alunoController.atualizarAluno);

// Excluir aluno
router.delete('/:id', alunoController.excluirAluno);

module.exports = router;
