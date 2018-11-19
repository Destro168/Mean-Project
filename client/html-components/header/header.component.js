angular.
module('main').
component('headerComponent', {
	templateUrl: 'client/html-components/header/header.component.html',
	controller: function headerController($scope, serviceHeaderShow) {
		$scope.headerTitlesArray = ["Bookmarks", "HTML", "CSS", "AngularJS"];

		$scope.show = function (x) {
			var i;
			for (i = 0; i < serviceHeaderShow.windowShow.length; i++) {
				serviceHeaderShow.windowShow[i] = false;
			}

			serviceHeaderShow.windowShow[x] = true;
		};

		serviceHeaderShow.windowShow = [true];
	}
});