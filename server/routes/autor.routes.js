const AutorController = require('../controllers/autor.controller');
module.exports = function(app){
    app.post('/api/autor', AutorController.createAutor);
    app.get('/api/autor', AutorController.getAllAutor);
    app.get('/api/autor/:id', AutorController.getAutor);
    app.put('/api/autor/:id', AutorController.updateAutor);
    app.delete('/api/autor/:id', AutorController.deleteAutor);
    app.delete('/api/autor/:id', AutorController.deleteAutor);
    
}
