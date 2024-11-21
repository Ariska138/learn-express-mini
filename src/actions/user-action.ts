import { Request, Response } from 'express';

import {
  getUsers,
  getUserById,
  updateNameByIdx,
  getIndexById,
  removeDataByIdx,
  insertNewUser,
} from '../gateways/user-gateway';

// variasi 1
export function getAllDataUser(req: Request, res: Response) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(getUsers()));
};

// variasi 2
const getDataUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const user = getUserById(userId);

  if (user) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};

//variasi 3
export const addNewUser = (req: Request, res: Response) => {
  const newUser = insertNewUser(req.body.name);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;
  res.end(JSON.stringify(newUser));
};

// variasi 3
export const editUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const userIndex = getIndexById(userId);

  if (userIndex !== -1) {
    const dataUpdate = updateNameByIdx(userIndex, req.body.name);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(dataUpdate));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};

// variasi 2
const removeUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const userIndex = getIndexById(userId);

  if (userIndex !== -1) {
    const deletedUser = removeDataByIdx(userIndex);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(deletedUser[0]));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};

export {
  getDataUserById,
  removeUser
}