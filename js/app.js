var app = angular.module('quote', ['720kb.socialshare']);

app.controller("QuoteCtrl", function($scope, $http) {
  $http.get("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json").
    success(function(data, status, headers, config) {
      $scope.rep = data;
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

});
