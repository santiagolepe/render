render.controller('clients', ['$scope','$http', function($scope, $http){
  
  //toogle menu
  $('[data-toggle=offcanvas]').click(function(){
    $('.row-offcanvas').toggleClass('active');
    if($('[data-toggle=offcanvas]').val() === 'ver menu')  $('[data-toggle=offcanvas]').val('ocultar menu');
    else $('[data-toggle=offcanvas]').val('ver menu');
  });

  $scope.openForm = function(){
    $('#modalForm').modal('show');
  };

  var onError = function(error){
    notificationService.open(error.message);
  };

  $scope.getClients = function(){
    var get = $http.get('/api/clients');
    
    get.success(function(clients){
      $scope.clients = clients;
    });

    get.error(onError);
  };

  //init get all clients
  $scope.getClients();

  //save the client
  $scope.save = function(){
    var data = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val()
    };
    var post = $http.post('/api/clients/', data);

    post.success(function(){
      $scope.getClients();
    });

    post.error(onError);
  };


  $scope.grid = {data: 'clients'};

}]);
