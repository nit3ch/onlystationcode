function cityCtrl($scope, $http) {
  $http.get('stations/stationcode.json').success(function(data) {
    $scope.cities = data;
    shuffleArray($scope.cities);
  });
}
//$('.city-list').jscroll();
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}