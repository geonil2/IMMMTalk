import SQ from 'sequelize';
import { sequelize } from "../db/database";

type user = {
    email: string
    password: string
    username: string
    image: string
    description: string
    url: string
}

const DataTypes = SQ.DataTypes;

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description: DataTypes.TEXT,
  image: DataTypes.TEXT,
  url: DataTypes.TEXT,
}, { timestamps: true });

export async function findByEmail(email: string) {
  return User.findOne({ where: { email }});
}

export async function findById(id: number) {
  return User.findByPk(id).then((data: any) => data.dataValues);
}

export async function createUser(user: user) {
  return User.create(user).then((data: any) => data.dataValues);
}

export async function update (
  email: string,
  username: string,
  description: string,
  image: string,
  url: string
) {
    return findByEmail(email).then((data: any) => {
    data.username = username,
    data.description = description,
    data.image = image,
    data.url = url
    return data.save();
  });
}
