"use strict";
const employeeModel = require('../models/employees');
const employeeSchema = employeeModel.getEmployeeSchema();
const employees = employeeModel.getEmployeesConnection();

exports.getAllEmployees = (req, res) => {
	employees.find({}, {name : 1}, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
}

exports.addEmployee = (req, res) => {
	let employee = {};
	employee = req.body;
	let employeeSchema = new employees(employee);
	employeeSchema.save((err) => { if (err) throw err; res.send("Successfuly saved")});	
}

exports.getEmployee = (req, res) => {
	employees.find({ _id : req.params.id }, {ReportingTO : 0, __v : 0 }, (err, dbRes) => {
		if (err) throw err;
		res.send(dbRes);
	});
}

exports.updateEmployee = (req, res) => {
	let newValues = { $set : req.body };
	employees.findOneAndUpdate({ _id : req.params.id }, newValues, (err) => {
		if (err) throw err;
		res.send("Successfuly updated");
	});
}

exports.deleteEmployee = (req, res) => {
	employees.findOneAndRemove({ _id : req.params.id }, (err) => {
		if (err) throw err;
		res.send("Successfuly removed");
	});
}

exports.getSubordinates = (req, res) => {
	let query = {reportingTo : req.params.id};
	employees.find(query, {Name : 1 }, (err, result) => {
		res.send(result);
	});
}
