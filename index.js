
const express = require('express');
const app = express();

const alunoRoutes = require('./routes/alunoRoutes');
const middleware = require('./middlewares/middleware');

app.use(express.json());

app.use(middleware);

app.get('/', (req, res) => {
    res.send('Sistema de Cadastro de Alunos');
});

app.use('/alunos', alunoRoutes);

app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000');
});
