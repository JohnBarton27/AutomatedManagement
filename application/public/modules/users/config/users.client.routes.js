'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('update-prof-pic', {
			url: '/update-prof-pic',
			templateUrl: 'modules/users/views/update-prof-pic.client.view.html'
		}).
		state('upload-prof-pic', {
			url: '/upload-prof-pic',
			templateUrl: 'modules/users/views/upload-prof-pic.client.view.html'
		}).
		state('create-user', {
			url: '/create-user',
			templateUrl: 'modules/users/views/create-user.client.view.html'
		}).
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		}).
        state('listUsers', {
			url: '/users',
			templateUrl: 'modules/users/views/list-users.client.view.html'
		}).
		state('viewUser', {
			url: '/users/:userId',
			templateUrl: 'modules/users/views/view-user.client.view.html'
		}).
		state('editUser', {
			url: '/users/:userId/edit',
			templateUrl: 'modules/users/views/edit-user.client.view.html'
		});
	}
]);