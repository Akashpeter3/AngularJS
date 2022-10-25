var app = angular.module('myApp',[]);
app.controller('people',function($scope,$http){

$http.get('http://127.0.0.1:8887/people.json')
.then(function(response){
  console.log(response);
  $scope.persons = response.data.records;
})

});
