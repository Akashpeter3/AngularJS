var app = angular.module('reviewApp',[]);
app.controller('MyController',['$scope',function(c){
 c.form ={};
c.addReview =function(){
  c.reviews.push(c.form)
  c.form ={};
}
c.reviews = [
{
  comment: 'Need Improvement',
  by: 'Akashpeter@gmail.com'
},
{
  comment: 'Should be better',
  by: 'Naveen.Kunjumon@gmail.com'
}

]

}]);

app.directive('userinformation',function(){

  return {
    restrict: 'A',
    templateUrl: 'userinfo.html'
  };
});
