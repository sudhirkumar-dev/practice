import express from 'express';
import { signOut, signUp, signin } from '../Contollers/auth.controller.js';
const router = express.Router();

router.post('/signup',signUp)
router.post('/signin',signin)
router.post('/signout',signOut)

export default router