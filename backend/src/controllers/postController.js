const connection = require('../config/db');

var fs = require('fs');

// Função que rcebe dois argumentos: base64str, que é uma string em formato base64 a ser decodificada, e fileName, que é o nome do arquivo onde a decodificação será salva.
function base64_decode(base64str, fileName){
console.log('base64_decode :', base64_decode);
  var bitmap = Buffer.from(base64str, 'base64');

  // O conteúdo decodificado é escrito no arquivo especificado por fileName.
  fs.writeFileSync(fileName+'',bitmap, 'binary', function (err){
    if(err){
      console.log('Conversion error');
    }
  } );
}

async function listPosts(request, response) {
    const query = 'SELECT * FROM posts';

    connection.query(query, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storePost(request, response) {    
    const params = Array(
        request.body.titulo,
        request.body.tema,  
        request.body.legenda,
        request.body.criador,
        request.file.filename,
        request.body.user_id          
    );
    
    const query = 'INSERT INTO posts(titulo, tema, legenda, criador, video, user_id) values(?, ?, ?, ?, ?, ?);';

    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Post cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}


module.exports = {
    listPosts,
    storePost
}