import express from 'express';
import { listarUsuarios, excluirUsuario } from '../controllers/userController.js';

const router = express.Router();

router.get('/', listarUsuarios);

router.delete('/:id', excluirUsuario);

export default router;