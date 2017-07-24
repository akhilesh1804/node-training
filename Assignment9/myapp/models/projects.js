const mongoose = require('mongoose');
const employees = require('./employees').getEmployeesConnection;

const connection = mongoose.createConnection('mongodb://localhost:27017/GrepRuby');

const projectSchema = new mongoose.Schema({
	name : {type : String, required : true},
	manager : {type : mongoose.Schema.Types.ObjectId, ref : 'employees'},
	description : String,
	developers : [{type : mongoose.Schema.Types.ObjectId, ref : 'employees'}]
});

const projects = connection.model('projects', projectSchema);

exports.getProjectsConnection = () => projects;
exports.getProjectSchema = () => projectSchema;