var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    item: {type: String, index: {unique: true}, require:true}
}, {collection: 'items'});
exports.itemSchema = itemSchema;
