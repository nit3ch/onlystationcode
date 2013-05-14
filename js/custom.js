function cityCtrl($scope, $http) {
  $http.get('stations/stationcode.json').success(function(data) {
    $scope.cities = data;
  });
}
