"use strict";
let users = [
    { id: 1, name: 'Hafiz' },
    { id: 2, name: 'Gaza' },
];
module.exports.getUsers = () => {
    return users;
};
module.exports.getUserById = (userId) => {
    return users.find((u) => u.id === userId);
};
module.exports.insertNewUser = (name) => {
    const newUser = {
        id: users.length + 1,
        name,
    };
    users.push(newUser);
    return newUser;
};
module.exports.getIndexById = (userId) => {
    return users.findIndex((user) => user.id === userId);
};
module.exports.updateNameByIdx = (index, newName) => {
    users[index] = Object.assign(Object.assign({}, users[index]), { name: newName });
    return users[index];
};
module.exports.removeDataByIdx = (index) => {
    return users.splice(index, 1);
};
