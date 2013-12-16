var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var validate = require('mongoose-validate');

var usersSchema = new Schema({
    first_name:   {type: 'String', required: true},
    last_name:    {type: 'String', required: true},
    email:        {type: 'String', required: true, unique: true, index: true, lowercase:true, validate: [validate.email, 'invalid email address']},
    status:       {type: 'String', default: "active"},
    type:         {type: 'String', required: true, default: 'free'},
    password:     {type: 'String', required: true, match:/^.{8,200}$/},
    created_at:   {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', usersSchema);
