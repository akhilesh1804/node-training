"use strict";
const employeeModel = require('../models/employees');
const employeeSchema = employeeModel.getEmployeeSchema();
const employees = employeeModel.getEmployeesConnection();

exports.getAllEmployees = (req, res) => {
	console.log("Get all employees");
	employees.find({}, {name : 1}, (err, result) => {
		if (err) { res.status(500).send(err); }
		if (!err) 
			res.send(result);
});
}

exports.addEmployee = (req, res) => {
	let employee = {};
	employee = req.body;
	let employeeSchema = new employees(employee);
	employeeSchema.save((err) => { 
		if (err) { res.status(400).send(err); }
		if (!err) 
			res.send({ message : "Successfuly saved"})
	});	
}

exports.getEmployee = (req, res) => {
	employees.find({ _id : req.params.id }, {reportingTo : 0, __v : 0, token : 0 }, (err, dbRes) => {
		if (err) { res.status(500).send(err); }
		if (!err) 
			res.send(dbRes);
	});
}

exports.updateEmployee = (req, res) => {
	let newValues = { $set : req.body };
	employees.findOneAndUpdate({ _id : req.params.id }, newValues, (err) => {
		if (err) { res.status(400).send(err); }
		if (!err) 
			res.send({ message : "Successfuly updated"});
	});
}

exports.deleteEmployee = (req, res) => {
	employees.findOneAndRemove({ _id : req.params.id }, (err) => {
		if (err) { res.status(500).send(err); }
		res.send({ message : "Successfuly removed"});
	});
}

exports.getSubordinates = (req, res) => {
	let query = {reportingTo : req.params.id};
	employees.find(query, {name : 1 }, (err, result) => {
		if (err) { res.status(500).send(err); }
		if (!err) 
			res.send(result);
	});
}
