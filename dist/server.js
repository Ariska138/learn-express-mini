"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_action_1 = require("./actions/user-action");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/api/users', user_action_1.getAllDataUser);
app.get('/api/users/:id', user_action_1.getDataUserById);
app.post('/api/users', user_action_1.addNewUser);
app.put('/api/users/:id', user_action_1.editUser);
app.delete('/api/users/:id', user_action_1.removeUser);
app.listen(3000, function () {
    console.log('Server running on port 3000');
});
