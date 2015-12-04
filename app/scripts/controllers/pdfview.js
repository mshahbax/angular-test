'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:PdfviewCtrl
 * @description
 * # PdfviewCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('PdfviewCtrl', function ($scope) {
    $scope.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/material-design-2.pdf';
  });
