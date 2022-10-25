var app = angular.module('myApp',[]);

app.controller("MyController",['$scope',function(c){

  // c.name ='Manu';
  // c.age =24;
  // c.NameAndAge= function(){
  //
  //   return c.name+' '+c.age;
  // };
  // c.isSpy=true;
  // c.codename ='Jibin'

//   c.employees =[
// {
//   fname: 'Akash',
//   lname:'Peter',
//   salary:'80000'
//
// },
//
// {
//   fname: 'Hari',
//   lname:'Krishnan',
//   salary: '50000'
// },
// {
//   fname: 'Jobin',
//   lname:'Joseph',
//   salary: '70000'
// }
//
//
// ];

  c.count = 0;
  c.show = true;
  c.toggleshow = function(){
      c.show = !c.show;

  };

}]);
