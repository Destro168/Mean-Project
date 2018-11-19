angular.
module('main').
component('leftNavBarComponent', {
	templateUrl: 'client/html-components/left-nav-bar/left-nav-bar.component.html',
	controller: function leftNavBarComponent($scope, serviceHeaderShow) {
		
		$scope.serviceHeaderShow = serviceHeaderShow;

		// Data fields.
		$scope.headerDataFormatOne = [];
		$scope.angularJSdata = [];

		// Class Definitions
		this.webElement = function(name_, code_) {
			this.name = name_;
			this.code = code_;

			this.updateTextArea = function () {
				this.textAreaText = this.code;
			}
		}

		this.menuItem = function(name_, webElementsArray_)
		{
			this.name = name_;
			this.webElementsArray = webElementsArray_;
		}

		this.init = function()
		{
			$scope.headerDataFormatOne.push(new this.menuItem("bookmarks",
				[
					new this.webElement("JS All Reference", "https://www.w3schools.com/jsref/default.asp"),
					new this.webElement("JS Array", "https://www.w3schools.com/jsref/jsref_obj_array.asp"),

					new this.webElement("CAR - Production", "https://atiam.train.army.mil/catalog/dashboard"),
					new this.webElement("TAG - Production", "https://atiam.train.army.mil/catalog/tag/home"),
					new this.webElement("MT2 - Production", "https://atiam.train.army.mil/mthp/"),

					new this.webElement("CAR - Test", "https://atiatest.train.army.mil/catalog/dashboard"),
					new this.webElement("TAG - Test", "https://atiatest.train.army.mil/catalog/tag/home"),
					new this.webElement("MT2 - Test", "https://atiatest.train.army.mil/mthp/"),

					new this.webElement("CAR - LocalHost", "http://localhost:8080/catalog/dashboard"),
					new this.webElement("TAG - LocalHost", "http://localhost:8080/catalog/tag/home"),
					new this.webElement("MT2 - LocalHost", "http://localhost:8080/mt2/")
				]
			));

			$scope.headerDataFormatOne.push(new this.menuItem("html",
				[
					new this.webElement("Introduction",
						"<!DOCTYPE html\>\n<html\>\n<head\>\n<title\>Page Title</title\>\n</head\>\n<body\>\n\n<h1\>My First Heading</h1\>\n<p\>My first paragraph.</p\>\n\n</body\>\n</html\>"
					),
					new this.webElement("Text-Decoration",
						"h1 {\n    text-decoration: overline;\n}\n\nh2 {\n    text-decoration: line-through;\n}\n\nh3 {\n    text-decoration: underline;\n}\n\nh3 {\n    text-decoration: underline overline;\n}"
					),
				]
			));

			$scope.headerDataFormatOne.push(new this.menuItem("css",
				[
					new this.webElement("Text-Decoration",
						"h1 {\n    text-decoration: overline;\n}\n\nh2 {\n    text-decoration: line-through;\n}\n\nh3 {\n    text-decoration: underline;\n}\n\nh3 {\n    text-decoration: underline overline;\n}"
					),
				]
			));
			
			$scope.angularJSdata.push(new this.menuItem("datastructures",
				[
					new this.webElement("Array",
						"x = [\n\t{Element},\n\t{Element},\n\t{... n}\n];"
					),
					new this.webElement("Objects",
						"myObj = {\n	x : \"hey\",\n	y : {\n		face : \"head\",\n		arm : \"leg\"\n	}\n};"
					),
					new this.webElement("For Loop",
						"for (var i = 0; i < x.length; i++) \n{\n\n}"
					),
					new this.webElement("Switch ",
						"switch(x)\n{\n    case n:\n        code block\n        break;\n    default:\n        code block\n}"
					),
					new this.webElement("ng-repeat",
						"<div ng-repeat=\"x in modalLinks\"\> \n	<label\>{{x.[someVar]}}</label\><br /\>\n</div\>"
					),
				]
			));

			$scope.angularJSdata.push(new this.menuItem("modulePieces",
				[
					new this.webElement("Routing",
						"<!DOCTYPE html\>\n<html\>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"\></script\>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js\"\></script\>\n\n<body ng-app=\"myApp\"\>\n\n<p\><a href=\"#/!\"\>Main</a\></p\>\n\n<a href=\"#!red\"\>Red</a\>\n<a href=\"#!green\"\>Green</a\>\n<a href=\"#!blue\"\>Blue</a\>\n\n<div ng-view\></div\>\n\n<script\>\nvar app = angular.module(\"myApp\", [\"ngRoute\"]);\napp.config(function($routeProvider) {\n    $routeProvider\n    .when(\"/\", {\n        templateUrl : \"main.htm\"\n    })\n    .when(\"/red\", {\n        templateUrl : \"red.htm\"\n    })\n    .when(\"/green\", {\n        templateUrl : \"green.htm\"\n    })\n    .when(\"/blue\", {\n        templateUrl : \"blue.htm\"\n    });\n});\n</script\>\n\n<p\>Click on the links to navigate to \"red.htm\", \"green.htm\", \"blue.htm\", or back to \"main.htm\"</p\>\n</body\>\n</html\>"
					),
					new this.webElement("Directives",
						"* Example of creating a new directive.\n\n<!DOCTYPE html\>\n<html\>\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"\></script\>\n<body ng-app=\"myApp\"\>\n\n<w3-test-directive\></w3-test-directive\>\n\n<script\>\nvar app = angular.module(\"myApp\", []);\napp.directive(\"w3TestDirective\", function() {\n    return {\n        template : \"<h1\>Made by a directive!</h1\>\"\n    };\n});\n</script\>\n\n</body\>\n</html\>\n\n* Four ways to invoke a directive: \n\nElement name: <w3-test-directive\></w3-test-\ndirective\>\nAttribute: <div w3-test-directive\></div\>\nClass: <div class=\"w3-test-directive\"\></div\>\nComment: <!-- directive: w3-test-directive --\>\n\nE,A,C,M are the restrict flag values.\n\n* Implementation:\n\nvar app = angular.module(\"myApp\", []);\napp.directive(\"w3TestDirective\", function() {\n    return {\n        restrict : \"A\",\n        template : \"<h1\>Made by a directive!</h1\>\"\n    };\n });"
					),
				]
			));
		}


		// Call the init function to set final values of variables.
		this.init();
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