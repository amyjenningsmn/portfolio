var app = angular.module('portfolioApp', []);

app.controller('MainController', ['$http', function($http) {

var vm = this;

vm.nileShow = function (){
  vm.nile = true;
  vm.prompted = false;
  vm.february = false;
};

vm.promptedShow = function(){
  vm.nile = false;
  vm.prompted = true;
  vm.february = false;
};

vm.februaryShow = function(){
  vm.nile = false;
  vm.prompted = false;
  vm.february = true;
};

vm.closeDisplay = function(){
  vm.nile = false;
  vm.prompted = false;
  vm.february = false;
}

// this could be refactored (switch? loop?)
// need to add animations for transitions

}]);
