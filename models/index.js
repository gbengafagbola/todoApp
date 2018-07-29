 var mongoose = require('mongoose');
 mongoose.set('debug', true);
 mongoose.connect('mongodb://localhost/todoApp')

 mongoose.Promise = Promise;

 module.exports.Todo = require("./todo");
