"use strict";
const projectModel = require('../models/projects');
const employeeModel = require('../models/employees');

const projectSchema = projectModel.getProjectSchema();
const projects = projectModel.getProjectsConnection();
const employees = employeeModel.getEmployeesConnection();

exports.getAllProjects = (req, res) => {
	projects.find({}, {name : 1}, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
}

exports.addProject = (req, res) => {
	let project = {};
	project = req.body;
	let projectSchema = new projects(project);
	projectSchema.save((err) => { if (err) throw err; res.send("Successfuly saved")});
}

exports.getProject = (req, response) => {
	projects.find({ _id : req.params.id }, (err, result) => {
		if (err) throw err;
		let object  = {};
		object["_id"] = result[0]["_id"];
		object["name"] = result[0]["name"];
		object["manager"] = "";
		object["description"] = result[0]["description"];
		object["developers"] = [];
		let manager = result[0]["manager"];
		let developers = result[0]["developers"];
		employees.find({ _id : manager}, (err, res) => {
			object["manager"] = res[0]["name"];
			employees.find({ _id : {$in : developers}}, (err, dbRes) => {
				for (let i = 0; i < dbRes.length; i++) {
					object["developers"][i] = dbRes[i]["name"];
				}
				response.send(object);
			});
		});
	});
}

exports.updateProject = (req, res) => {
	let newValues = { $set : req.body };
	projects.findOneAndUpdate({ _id : req.params.id }, newValues, (err) => {
		if (err) throw err;
		res.send("Successfuly updated");
	});
}

exports.deleteProject = (req, res) => {
	projects.findOneAndRemove({ _id : req.params.id }, (err) => {
		if (err) throw err;
		res.send("Successfuly removed");
	});
}
