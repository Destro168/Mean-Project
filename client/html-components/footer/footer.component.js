angular.
module('main').
component('footerComponent', {
	templateUrl: 'html-components/footer/footer.component.html',
	controller: function footerComponent($scope) {		
		$scope.navBarElementArray = [
			"Converter1",
			"Converter2",
			"Converter3"
		];
}});