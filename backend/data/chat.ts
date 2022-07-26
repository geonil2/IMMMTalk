import SQ from 'sequelize';
import { sequelize } from '../db/database';
import {findById, User} from './auth';
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

export const Chat = sequelize.define('chat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  sender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiver: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastMessage: {
    type: DataTypes.TEXT
  },
});
// Chat.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id',
    'text',
    'createdAt',
    [Sequelize.col('user.email'), 'email'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};
//
// const ORDER_DESC = {
//     order: [['createdAt', 'DESC']],
// };

//
// export async function getAll() {
//     return Chat.findAll({ ...INCLUDE_USER, ...ORDER_DESC});
// }
//
export async function getAllById(id: number) {
    return Chat.findAll({
        // ...INCLUDE_USER,
        // ...ORDER_DESC,
        // include: {
        //     ...INCLUDE_USER.include,
            where: { sender: id },
        // }
    });
}

export async function getById(id: number) {
    return Chat.findOne({
        where: {id},
        // attributes: [
        //   'id',
        //   'text',
        //   'createdAt',
        //   [Sequelize.col('user.email'), 'email'],
        //   [Sequelize.col('user.username'), 'username'],
        // ],
        // include: {
        //   model: User,
        //   attributes: [],
        // }
    }).then((res: any) => res.dataValues)
}

export async function create(title: string, sender: number, receiver: number) {
  const getSenderData = await findById(sender);
  const getReceiverData = await findById(receiver);
  return getSenderData && getReceiverData ? Chat.create({ title, sender, receiver}).then((res: any) => res.dataValues) : null;
  // return Chat.create({ title, sender, receiver }).then((res: any) => getById(res.dataValues.id));
}

export async function update(id: number, title: string) {
  // const { dataValues } = await Chat.findByPk(id) as any;
  // console.log(dataValues, 'chat!')
  // dataValues.title = title;
  // return dataValues.save();
  return Chat.findByPk(id)
  .then((data: any) => {
    data.title = title;
    return data.save();
  });
}
//
// export async function remove(id: number) {
//     return Chat.findByPk(id)
//     .then((chat) => {
//         chat.destroy();
//     });
// }
