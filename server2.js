// app.js
const MyExpress = require('express');
const { getUserActions, getUserByIdAction, createNewUserAction, updateUserAction, deleteUserAction } = require('./actions/users-action');

const app = new MyExpress();

// Middleware untuk mengurai JSON body
app.use(MyExpress.json());

// Get all users
app.get('/api/users', getUserActions);
// Get user by ID
app.get('/api/users/:id', getUserByIdAction);
// Create a new user
app.post('/api/users', createNewUserAction);
// Update an existing user
app.put('/api/users/:id', updateUserAction);
// Delete a user
app.delete('/api/users/:id', deleteUserAction);

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
