import express from 'express'
import Register from '../controllers/Register.controller.js';
import { validationResult } from 'express-validator';
import { RegisterSchema } from '../validationSchema/RegisterSchema.js';

const apiRouter = express.Router();

apiRouter.post('/register',RegisterSchema,Register);

export default apiRouter;
