import express, {Request, Response, NextFunction} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from "morgan";
import {config} from "./config";
import * as path from "path";
import authRouter from './router/auth';
import chatRouter from './router/chat';
import messageRouter from './router/message';
import {sequelize} from "./db/database";
import {Server} from "socket.io";
import {initSocket} from "./connection/socket";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/auth', authRouter);
app.use('/chat', chatRouter);
app.use('/message', messageRouter);

if (config.environment === 'production') {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.use("*", (req, res) => {
      return res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(500);
    console.log(error);
});

const server = app.listen(config.host.port);
// const socketIO = new Server(server, {
//   cors: {
//     origin: '*',
//   }
// });

sequelize.sync().then(() => {
  // app.listen(config.host.port);
  initSocket(server);
  // socketIO.on('connection', (socket) => {
  //   console.log('hirururu')
  //   socketIO.on("first request", req => {
  //     console.log(req);
  //     socketIO.emit('first response', { data : 'hiru'});
  //   })
  // });
})
