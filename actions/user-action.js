const {
  getUsers,
  getUserById,
  updateNameByIdx,
  getIndexById,
  removeDataByIdx,
  insertNewUser,
} = require('../gateways/user-gateway');

module.exports.getAllDataUser = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(getUsers()));
};

module.exports.getDataUserById = (req, res) => {
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

module.exports.addNewUser = (req, res) => {
  const newUser = insertNewUser(req.body.name);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;
  res.end(JSON.stringify(newUser));
};

module.exports.editUser = (req, res) => {
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

module.exports.removeUser = (req, res) => {
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
