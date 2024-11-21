import express from 'express';

import {
  getAllDataUser,
  getDataUserById,
  addNewUser,
  editUser,
  removeUser,
} from './actions/user-action';

const app = express();

// Middleware untuk mengurai JSON body
app.use(express.json());

app.get('/api/users', getAllDataUser);
app.get('/api/users/:id', getDataUserById);
app.post('/api/users', addNewUser);
app.put('/api/users/:id', editUser);
app.delete('/api/users/:id', removeUser);

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
