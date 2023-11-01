// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionsRouter = require('./routes/reactionsRouter');

// Instanciar o express na variável app
const app = express();
// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
app.set('port', process.env.PORT || 3005);
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', postRouter);
app.use('/api', commentRouter);
app.use('/api', reactionsRouter);

module.exports = app;

