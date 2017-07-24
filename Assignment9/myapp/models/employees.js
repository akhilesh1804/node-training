const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/GrepRuby');

const employeeSchema = new mongoose.Schema({
	name : {type : String, required : true},
	DOB : {type : String, required : true},
	gender : {type : String, enum : ["MALE", "FEMALE"], required : true},
	contact : {phone : String, email : String },
	address : String,
	role : {type : String, enum : ["Manager", "Developer"], required : true},
	reportingTo : {type : mongoose.Schema.Types.ObjectId, ref : 'employees'}
});

const employees = connection.model('employees', employeeSchema);

exports.getEmployeesConnection = () => employees;
exports.getEmployeeSchema = () => employeeSchema;