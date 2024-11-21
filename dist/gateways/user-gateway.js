"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDataByIdx = exports.updateNameByIdx = exports.getIndexById = exports.insertNewUser = exports.getUserById = exports.getUsers = void 0;
var users = [
    { id: 1, name: 'Hafiz' },
    { id: 2, name: 'Gaza' },
];
var getUsers = function () {
    return users;
};
exports.getUsers = getUsers;
var getUserById = function (userId) {
    return users.find(function (u) { return u.id === userId; });
};
exports.getUserById = getUserById;
var insertNewUser = function (name) {
    var newUser = {
        id: users.length + 1,
        name: name,
    };
    users.push(newUser);
    return newUser;
};
exports.insertNewUser = insertNewUser;
var getIndexById = function (userId) {
    return users.findIndex(function (user) { return user.id === userId; });
};
exports.getIndexById = getIndexById;
var updateNameByIdx = function (index, newName) {
    users[index] = __assign(__assign({}, users[index]), { name: newName });
    return users[index];
};
exports.updateNameByIdx = updateNameByIdx;
var removeDataByIdx = function (index) {
    return users.splice(index, 1);
};
exports.removeDataByIdx = removeDataByIdx;
