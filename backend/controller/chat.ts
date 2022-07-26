import { Request, Response, NextFunction } from 'express';
import { getSocketIO } from '../connection/socket';
import * as chatRepository from '../data/chat';
import {parse} from "dotenv";

export async function getChats(req: Request, res: Response) {
  const id = req.query.id;
  const data = await (id
    ? chatRepository.getAllById(parseInt(id as string))
    : null);
  res.status(200).json(data);
}

// export async function getChat(req: Request, res: Response, next: NextFunction) {
//     const id = req.params.id;
//     const chat = await chatRepository.getById(id);
//     if (chat) {
//         res.status(200).json(chat);
//     } else {
//         res.status(404).json({ message: `chat id(${id}) not found` });
//     }
// }

export async function createChat(req: Request, res: Response, next: NextFunction) {
  const { title, sender, receiver } = req.body;
  const chat = await chatRepository.create(title, sender, receiver);
  console.log(chat, 'chat')
  res.status(201).json(chat);
  // getSocketIO().emit('chats', chat);
}

export async function updateChatTitle(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const { title } = req.body;
  const chat = await chatRepository.getById(parseInt(id));
  console.log(chat, '123123')
    if (!chat) {
      return res.status(404).json({ message: `chat not found: ${id}` });
    }
    //@ts-ignore
    if (chat.sender !== req.email) {
      return res.sendStatus(403);
    }
    const updated = await chatRepository.update(parseInt(id), title);
    res.status(200).json(updated);
}
//
// export async function deleteChat(req: Request, res: Response, next: NextFunction) {
//     const id = req.params.id;
//     const chat = await chatRepository.getById(id);
//     if (!chat) {
//         return res.status(404).json({ message: `chat not found: ${id}` });
//     }
//     if (chat.email !== req.email) {
//         return res.sendStatus(403);
//     }
//     await chatRepository.remove(id);
//     res.sendStatus(204);
// }

