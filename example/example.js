(function() {
	'use strict';

	angular
		.module('example', ['angular-marquee'])
		.controller('exampleCtrl', function($scope, $interval) {
			$scope.scroll = true;
			$scope.duration = 10000;
			$scope.title = "Welcome";
			$scope.time = new Date();
			$interval(function() {
				$scope.time = new Date();
			}, 1000);
		});

})();