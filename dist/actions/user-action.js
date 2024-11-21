"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getDataUserById = exports.editUser = exports.addNewUser = void 0;
exports.getAllDataUser = getAllDataUser;
var user_gateway_1 = require("../gateways/user-gateway");
function getAllDataUser(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify((0, user_gateway_1.getUsers)()));
}
;
var getDataUserById = function (req, res) {
    var userId = parseInt(req.params.id);
    var user = (0, user_gateway_1.getUserById)(userId);
    if (user) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
    }
    else {
        res.statusCode = 404;
        res.end('User not found');
    }
};
exports.getDataUserById = getDataUserById;
var addNewUser = function (req, res) {
    var newUser = (0, user_gateway_1.insertNewUser)(req.body.name);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 201;
    res.end(JSON.stringify(newUser));
};
exports.addNewUser = addNewUser;
var editUser = function (req, res) {
    var userId = parseInt(req.params.id);
    var userIndex = (0, user_gateway_1.getIndexById)(userId);
    if (userIndex !== -1) {
        var dataUpdate = (0, user_gateway_1.updateNameByIdx)(userIndex, req.body.name);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dataUpdate));
    }
    else {
        res.statusCode = 404;
        res.end('User not found');
    }
};
exports.editUser = editUser;
var removeUser = function (req, res) {
    var userId = parseInt(req.params.id);
    var userIndex = (0, user_gateway_1.getIndexById)(userId);
    if (userIndex !== -1) {
        var deletedUser = (0, user_gateway_1.removeDataByIdx)(userIndex);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(deletedUser[0]));
    }
    else {
        res.statusCode = 404;
        res.end('User not found');
    }
};
exports.removeUser = removeUser;
