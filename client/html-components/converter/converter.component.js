angular.
module('main').
component('converterComponent', {
    templateUrl: 'client/html-components/converter/converter.component.html',
    controller: function converterComponent($scope, $http) {
        // Variables
        $scope.textAreaText = "";
        $scope.userInput = "";

        // Functions
        $scope.parseContent = function () {
            finalStr = $scope.userInput;

            finalStr = finalStr.replace(/(?:\r\n|\r|\n)/g, "\\n");
            finalStr = finalStr.replace(/([\"])/g, "\\\"");
            finalStr = finalStr.replace(/([>])/g, "\\>");

            // TODO, implement this format:
            //new this.webElement("JS All Reference", "https://www.w3schools.com/jsref/default.asp"),

            finalStr = "new this.webElement(\"\",\n\t\t\t\t\t\t\"" + finalStr + "\"\n\t\t\t\t\t),"
            $scope.textAreaText = finalStr;

            document.getElementById("textArea1").select();
            document.execCommand('copy');

            // Add http get here.
            var x = $http.get("http://localhost:8080/getData");
            
            console.log({x});
            
        };
    }
});
