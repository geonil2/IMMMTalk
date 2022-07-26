import express from 'express';
import 'express-async-errors';
import { body } from "express-validator";
import { validate } from "../middleware/validator";
import * as authController from '../controller/auth';
import { isAuth } from "../middleware/auth";

const router = express.Router();

const validateCredential = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Invalid Error'),
    validate,
];

const validateSignIn = [
    ...validateCredential,
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Invalid Error'),
    validate,
];

const validateUpdate = [
    ...validateCredential,
    body('username').trim().notEmpty().withMessage('name is missing'),
    body(['url', 'image'])
        .isURL()
        .withMessage('invalid URL')
        .optional({ nullable: true, checkFalsy: true }),
    validate,
];

router.post('/signup', validateSignIn, authController.signUp);
router.post('/signin', validateSignIn, authController.signIn);
router.put('/update', isAuth, validateUpdate, authController.update);

export default router;
