var app = angular.module('main');

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html"
        })
        .when("/converter", {
            templateUrl: "pages/converter.html"
        })
});

/**
 * 
.when("/html", {
    templateUrl: "html.htm"
})
.when("/css", {
    templateUrl: "css.html"
})
.when("/angularjs", {
    templateUrl: "angularjs.htm"
})
 */