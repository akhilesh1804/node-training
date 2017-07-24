const router = require('express').Router();
const employeesRoute = require('./employeesRoute');
const projectsRoute = require('./projectsRoute');


const routing = () => {
	//console.log("\n\n Routing Mehtod")
	router.use('/employees', employeesRoute());
	router.use('/projects', projectsRoute());
	return router;
	//if (employeesRoute()) return employeesRoute();
	//if (projectsRoute()) return projectsRoute();
};

module.exports = routing;

// const router = require('express').Router();

// const controllers = require('../controllers/')

// exports.routing = () => {
// 	router.get('/employees', employee_controller.getAllEmployees);
//   router.post('/employees', employee_controller.addEmployee);
//   router.get('/employees/:id', employee_controller.getEmployee);
//   router.put('/employees/:id', employee_controller.updateEmployee);
//   router.delete('/employees/:id', employee_controller.deleteEmployee);
//   router.get('/employees/:id/subordinates', employee_controller.getSubordinates);
//   router.get('/projects', project_controller.getAllProjects);
//   router.post('/projects', project_controller.addProject);
//   router.get('/projects/:id', project_controller.getProject);
//   router.put('/projects/:id', project_controller.updateProject);
//   router.delete('/projects/:id', project_controller.deleteProject);
//   return router;
// }