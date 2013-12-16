render.controller('home', ['$scope','$http', function($scope, $http){

console.log('home');
  var onError = function(error){
    notificationService.open(error.message);
  };

}]);
