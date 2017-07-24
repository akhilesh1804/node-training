const router = require('express').Router();

const employee_controller = require('../controllers/employeeController');

const routing = () => {
	//console.log("In employee Routes");
	router.get('/', employee_controller.getAllEmployees);
  router.post('/', employee_controller.addEmployee);
  router.get('/:id', employee_controller.getEmployee);
  router.put('/:id', employee_controller.updateEmployee);
  router.delete('/:id', employee_controller.deleteEmployee);
  router.get('/:id/subordinates', employee_controller.getSubordinates);
  //console.log("employee route ends");
  //console.log(router);
  //router.get('/employees', employee_controller.getAllEmployees);
  return router;
}

module.exports = routing;