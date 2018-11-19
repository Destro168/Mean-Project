angular.
module('main').
factory('serviceHeaderShow', function () {
    this.windowShow = [true, false, false, false];
    return this.windowShow;
});