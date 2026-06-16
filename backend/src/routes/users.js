const express = require('express');
const router = express.Router();
const { listarUsuarios, excluirUsuario } = require('../controllers/userController');

router.get('/', listarUsuarios);
router.delete('/:nome', excluirUsuario);

module.exports = router;