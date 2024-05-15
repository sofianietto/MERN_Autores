
const { Autor } = require("../models/autor.model");

module.exports.createAutor = async (request, response) => {

    try {
        autor = await Autor.create(request.body);
    response.json(autor);

    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllAutor = async (request, response) => {
    try {
        const autors = await Autor.find().sort({name: 1})
        response.json(autors)
        
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAutor = async (request, response) => {
    try {
        const autor = await Autor.findOne({_id:request.params.id})
        response.json(autor)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateAutor = async (request, response) => {
    try {
        const autor = await Autor.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true}) //devuelve actualizado
        response.json(autor)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteAutor = async (request, response) => {
    try {
        const autor = await Autor.deleteOne({_id: request.params.id})
        response.json(autor)
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
