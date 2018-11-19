angular.
module('main').
component('footerComponent', {
	templateUrl: 'client/html-components/footer/footer.component.html',
	controller: function footerComponent($scope) {		
		$scope.navBarElementArray = [
			"File Directory -> E:\! My documents\Training\HTML-JS-CSS\custom-website",
			"Converter1",
			"Converter2",
			"Converter3"
		];
}});