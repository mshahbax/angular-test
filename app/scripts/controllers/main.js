'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
        .controller('MainCtrl', function ($scope) {
            console.log(sha256('12345')); // converting string to sha256
            $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
            $scope.addTodo = function () {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            };
            $scope.removeTodo = function (index) {
                $scope.todos.splice(index, 1);
            };
            
            //Endpoint testing
//            var obj = {};
//            fetch(obj);
//            function fetch(postData) {
//
//                var method = 'POST';
//                var url = "http://kidlr.lotiv.com/api/user/register";
//                var deferred = $q.defer();
//                // var headers = {'auth-token': '{sPjZze9s@4hyBAieLdWJFz2juAdgnnRhsTVC>Wih))J9WT(kr','Content-Type': undefined};
//                $http({method: method, data: {email : 's@s.com', password : ''}, url: url, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
//                        then(function (data) {
//                            deferred.resolve(data);
//                        }, function (error) {
//                            deferred.reject(error);
//                        });
//                return deferred.promise;
//
//            }
            
            
            
        });
        