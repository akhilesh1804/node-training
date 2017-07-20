const express = require('express');
const router = express.Router();

const employee_controller = require('../controllers/employeeController');
const routing = () => {
	router.get('/', employee_controller.getAllEmployees);
  router.post('/', employee_controller.addEmployee);
  router.get('/:id', employee_controller.getEmployee);
  router.put('/:id', employee_controller.updateEmployee);
  router.delete('/:id', employee_controller.deleteEmployee);
  router.get('/:id/subordinates', employee_controller.getSubordinates);
  return router;
}

module.exports = routing;
