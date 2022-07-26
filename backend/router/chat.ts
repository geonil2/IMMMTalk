import express from "express";
import 'express-async-errors';
import { body } from "express-validator";
import * as chatController from '../controller/chat';
import { isAuth } from "../middleware/auth";
import { validate } from "../middleware/validator";
import {updateChatTitle} from "../controller/chat";

const router = express.Router();

const validateChat = [
    body('title')
        .trim()
        .isLength({ min : 2 })
        .withMessage('Text should be at least 2 characters'),
    validate
]

router.get('/', isAuth, chatController.getChats);
// router.get('/:id', isAuth, chatController.getChat);
router.post('/', isAuth, validateChat, chatController.createChat);
router.put('/:id', isAuth, validateChat, chatController.updateChatTitle);
// router.delete('/:id', isAuth, chatController.deleteChat);

export default router;
