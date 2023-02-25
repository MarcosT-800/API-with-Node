"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api', (req, res) => {
    const users = [
        { id: 1, name: 'João' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Pedro' },
    ];
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const user = { id: id, name: 'Usuário ' + id };
    res.json(user);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
