import express from "express";
import {isAuth} from "../middleware/auth";
import {body} from "express-validator";
import {validate} from "../middleware/validator";
import * as messageController from '../controller/message';

const router = express.Router();

const validateMessage = [
  body('text')
    .trim(),
  validate
]

router.get('/', isAuth, messageController.getMessages);
router.post('/', isAuth, validateMessage, messageController.createMessage);

export default router;
