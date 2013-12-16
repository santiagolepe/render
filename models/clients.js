var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var validate = require('mongoose-validate');

var clientsSchema = new Schema({
    first_name:   {type: 'String', required: true},
    last_name:    {type: 'String', required: true},
    created_at:   {type: Date, default: Date.now}
});

module.exports = mongoose.model('clients', clientsSchema);
