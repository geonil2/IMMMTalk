import SQ from 'sequelize'
import { sequelize } from '../db/database';
import { Chat } from "./chat";
import {findById} from "./auth";
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

export const Message = sequelize.define('message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiver: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT
  },
});
Message.belongsTo(Chat);

export async function getAllMessage(id: number) {
  return Message.findAll({ where: { chatId: id } })
}

export async function create(sender: number, receiver: number, text: string, chatId: number) {
  return Message.create({ sender, receiver, text, chatId}).then((res: any) => res.dataValues);
}
