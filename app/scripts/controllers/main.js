'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
        .controller('MainCtrl', function ($scope, $http,$q) {
            //console.log(sha256('12345')); // converting string to sha256
            $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
            $scope.addTodo = function () {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            };
            $scope.removeTodo = function (index) {
                $scope.todos.splice(index, 1);
            };
                      
            function fetch() {

                var method = 'POST';
                var url = 'http://kidlr.lotiv.com/api/user/register';
                var deferred = $q.defer();
                // var headers = {'auth-token': '{sPjZze9s@4hyBAieLdWJFz2juAdgnnRhsTVC>Wih))J9WT(kr','Content-Type': undefined};
                $http({method: method, data: {email : 's@s.com', password : ''}, url: url, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
                        then(function (data) {
                            deferred.resolve(data);
                        }, function (error) {
                            deferred.reject(error);
                        });
                return deferred.promise;

            }
			//Endpoint testing
			fetch();
            
            
            
            
            
            
            
            
            
            
            
            
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function() { //$event
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
            
            
            
            
            
            
            
            
            
            
            
        });
        