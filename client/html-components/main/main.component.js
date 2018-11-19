angular.
module('main').
component('mainComponent', {
	templateUrl: 'client/html-components/main/main.component.html',
	controller: function mainComponent($scope, $http) {

		$scope.performPost = function() {
			$http.post("http://localhost:8080/saveData", "Hello");
		}	
	}
});

/* Outdated utility function
this.initNestedObj = function(obj) {
	var keys_T1 = Object.keys(obj);
	var elem_Array;

	console.log("i:", obj, keys_T1);

	for (var i = 0; i < keys_T1.length; i++) {
		console.log("i2:", i, " ", keys_T1[i], " ", obj[keys_T1[i]]);

		obj[keys_T1[i]].prototype.id = i;
		obj[keys_T1[i]].prototype.desc = keys_T1[i];
	}
}
*/

//https://docs.angularjs.org/api/ng/service/$http#post
//https://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js