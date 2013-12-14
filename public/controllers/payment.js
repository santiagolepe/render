render.controller('payment', ['$scope','$http', function($scope, $http){

  var onError = function(error){
    notificationService.open(error.message);
  };

}]);

