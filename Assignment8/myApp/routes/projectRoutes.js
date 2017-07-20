const express = require('express');
const router = express.Router();

const project_controller = require('../controllers/projectController');

const routing = () => {
	router.get('/', project_controller.getAllProjects);
  router.post('/', project_controller.addProject);
  router.get('/:id', project_controller.getProject);
  router.put('/:id', project_controller.updateProject);
  router.delete('/:id', project_controller.deleteProject);
  return router;
}

module.exports = routing;
