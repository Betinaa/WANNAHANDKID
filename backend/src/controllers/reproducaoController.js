const connection = require('../config/db');


async function listPostDetail(request, response) {
    const query = 'SELECT * FROM posts WHERE id = ? ';
    const postID = request.body.postID;

    connection.query(query, [postID], (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Reproduçao funcionando.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a reproduçao. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}


module.exports = {
    listPostDetail,
}