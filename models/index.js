 var mongoose = require('mongoose');
 mongoose.set('debug', true);
 mongoose.connect('mongodb+srv://holard:oluwababafemi@cluster0-3ybid.mongodb.net/test')

 mongoose.Promise = Promise;

 module.exports.Todo = require("./todo");
