import express from 'express';
import { login, cadastro } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/cadastro', cadastro);

export default router;