const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const AutorSchema = new mongoose.Schema({
    name: { 
        type: String,
        uppercase: true,
        minlength: [3, 'Please enter a minimum of 3 characters'],
        requerid: [true, 'This data is required'],
    },
    
    
}, { timestamps: true });
module.exports.Autor = mongoose.model('Autor', AutorSchema);
