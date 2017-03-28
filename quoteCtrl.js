angular.module('myApp').controller('quoteCtrl', function($scope, quoteService) {



$scope.quotes = quoteService.getQuotes();



$scope.deleteQuote = function(textToDelete) {
  quoteService.removeData(textToDelete);
};

$scope.addQuote = function() {
var newQuote = {
  text: $scope.newQuoteText,
  author: $scope.newQuoteAuthor
}
if (quoteService.addData(newQuote)) {
  $scope.newQuoteText = '';
  $scope.newQuoteAuthor = '';
  }
};

})
