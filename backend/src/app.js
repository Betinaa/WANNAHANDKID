// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

const cors = require('cors');

const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionsRouter = require('./routes/reactionsRouter');

// Instanciar o express na variável app
const app = express();
app.use(express.json());

app.use(cors())
// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
app.set('port', process.env.PORT || 1903);
app.use('/api/', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);
app.use('/api/reacttions', reactionsRouter);

module.exports = app;

