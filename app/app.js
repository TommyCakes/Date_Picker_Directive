angular.module('calendarDemoApp', [])

  .controller('CalendarCtrl', function($filter) {
    var self = this;
    var date = new Date();
      // console.log(CalendarRange.getMonthlyRange(date));
      // console.log(CalendarRange.prepareDate(date));
    // })

})
  .directive('calenderDemo', function() {


    return {
      restrict: 'E',
      templateUrl: 'calendar-demo.html',
      // scope: false,
      controller: function ($scope, $element, $attrs) {
        $scope.message = Date.now();

        // console.log($scope.message);
          var date = new Date();

          // console.log(CalendarRange.getMonthlyRange(date));

          $scope.months = ['January',
        'February' ,'March ','April' ,'May', 'June', 'July', 'August', 'September', 'October',
         'November' ,'December'];
          // $scope.cObject = CalendarRange.getMonthlyRange(date);
          // console.log($scope.cObject);
          $scope.getNewMonth = function(month, year) {
            var date  = new Date(month + " " + year);
            $scope.dates = CalendarRange.getMonthlyRange(date).days;
            //  console.log($scope.dates);

             $scope.week1 = $scope.dates.slice(0, 7);
             $scope.week2 = $scope.dates.slice(7, 14);
             $scope.week3 = $scope.dates.slice(14, 21);
             $scope.week4 = $scope.dates.slice(21, 28);
             $scope.week5 = $scope.dates.slice(28, 35);
          }
         $scope.dates = CalendarRange.getMonthlyRange(date).days;
            // console.log($scope.dates);

          $scope.week1 = $scope.dates.slice(0, 7);
          $scope.week2 = $scope.dates.slice(7, 14);
          $scope.week3 = $scope.dates.slice(14, 21);
          $scope.week4 = $scope.dates.slice(21, 28);
          $scope.week5 = $scope.dates.slice(28, 35);

          var currentDate = CalendarRange.prepareDate(date);
          console.log(currentDate);
          $scope.currentDate = CalendarRange.prepareDate(date);
          console.log($scope.currentDate);
          var currentYear = currentDate.year;

          $scope.selectedYear = currentYear;
          $scope.selectedMonth = $scope.months[currentDate.month];

          $scope.years = [];
          for (var i = (currentYear - 20); i <= (currentYear + 20); i++) {
            $scope.years.push(i);

          }
      },

      link: function(scope, element, attrs) {
        var date = new Date();
        element.bind("click", function() {

          // alert(Date.now());
          // scope.getMonthlyRange();
        });
      }
    }
    // return {
      // restrict: 'E',
      // templateUrl: 'calendar-demo.html',
      // link: function($scope, element, attrs) {
      //
      //   }
      // });
  });
