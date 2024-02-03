import express from 'express'
import Register from '../controllers/Register.controller.js';

const apiRouter = express.Router();

apiRouter.post('/register',Register)

export default apiRouter;
