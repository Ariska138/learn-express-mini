let users = [
  { id: 1, name: 'Hafiz' },
  { id: 2, name: 'Gaza' },
];

module.exports.getAllDataUser = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users));
};

module.exports.getDataUserById = (req, res) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};

module.exports.addNewUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;
  res.end(JSON.stringify(newUser));
};

module.exports.editUser = (req, res) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex].name = req.body.name;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users[userIndex]));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};

module.exports.removeUser = (req, res) => {
  const userId = parseInt(req.params.id); // Mengambil ID dari req.params
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(deletedUser[0]));
  } else {
    res.statusCode = 404;
    res.end('User not found');
  }
};
