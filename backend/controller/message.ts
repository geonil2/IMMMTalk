import { Request, Response } from 'express';
import * as messageRepository from '../data/message';
import * as chatRepository from "../data/chat";

export async function getMessages(req: Request, res: Response) {
  const id = req.query.id;
  const data = await messageRepository.getAllMessage(parseInt(id as string))
  res.status(200).json(data);
}

export async function createMessage(req: Request, res: Response) {
  const { sender, receiver, text, chatId } = req.body;
  const message = await messageRepository.create(sender, receiver, text, chatId);
  res.status(201).json(message);
}
