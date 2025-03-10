'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var tasks = require('../../app/controllers/tasks.server.controller');

	// Tasks Routes
	app.route('/tasks')
		.get(users.requiresLogin, tasks.list)
		.post(users.requiresLogin, tasks.create);

	app.route('/tasks/:taskId')
		.get(users.requiresLogin, tasks.read)
		.put(users.requiresLogin, tasks.hasAuthorization, tasks.update)
		.delete(users.requiresLogin, tasks.hasAuthorization, tasks.delete);

	// Finish by binding the Task middleware
	app.param('taskId', tasks.taskByID);
};
