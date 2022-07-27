import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'express-async-errors';
import * as userRepository from '../data/auth';
import { config } from '../config';
import {findByEmail} from "../data/auth";

export async function signUp(req: Request, res: Response) {
    const { email, password, userName } = req.body;
    console.log(email, password, userName)
    const found = await userRepository.findByEmail(email);
    if (found) {
        return res.status(409).json({ message: `${email} already exists` });
    }
    const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
    const user = await userRepository.createUser({
        email,
        password : hashed,
        username : userName,
        image : 'https://picsum.photos/seed/picsum/200/300',
        description : '',
        url : ''
    });

    const token = createJwtToken(user.id);
    res.status(201).json({ ...user, token : token });
}

export async function signIn(req: Request, res: Response) {
  const {email, password} = req.body;
  const user = await userRepository.findByEmail(email);
  console.log(user, "!@#!@#")
  if (!user) {
    return res.status(401).json({ message: 'Invalid user' });
  }
  //@ts-ignore
  const userData = user.dataValues;
  const isValidPassword = await bcrypt.compare(password, userData.password);

  if (!isValidPassword) {
    console.log('비번다르다')
    return res.status(401).json({ message: 'Invalid user' });
  }

  const token = createJwtToken(userData.id);
  res.status(200).json({...userData, token: token});
}

export async function update(req: Request, res: Response) {
    const { email, username, description, image, url } = req.body;
    const user = await userRepository.findByEmail(email);
    if (!user) {
        return res.status(401).json({ message : 'Invalid user' });
    }

    const updated = await userRepository.update(email, username, description, image, url);
    //@ts-ignore
    res.status(200).json(updated.dataValues);
}

function createJwtToken(id: number) {
    return jwt.sign({ id }, config.jwt.secretKey, { expiresIn : config.jwt.expiresInSec});
}
