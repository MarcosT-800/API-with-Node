import express, { Request, Response } from 'express';

const app = express();

app.get('/api', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 4, name: 'Pedro' },
    { id: 5, name: 'Maria' },
    { id: 6, name: 'Pedro' },
  ];
  res.json(users);
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const user = { id: id, name: 'Usuário ' + id };
  res.json(user);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

