render.controller('clients', ['$scope','$http', function($scope, $http){

  //toogle menu
  $('[data-toggle=offcanvas]').click(function(){
    $('.row-offcanvas').toggleClass('active');
  });

  var onError = function(error){
    notificationService.open(error.message);
  };

}]);
