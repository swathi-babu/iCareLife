
/*================================================================
=>                  Controller = Discover popular cources
==================================================================*/
/*global app, $, Utility, disPopCourcesList, _ */

app.controller('discoverPopCourceCtrl', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    'use strict';

    console.log('Controller ===  VideoCtrl');

    $scope.selectedBtn = 'Elder Care';
    $scope.disPopCourcesList = disPopCourcesList;
    $scope.selectedCourceList = disPopCourcesList['Elder Care'];
    $scope.selectedList = $scope.selectedCourceList;

    $scope.selectSegmentBtn = function (btn) {
        $scope.selectedBtn = btn;
        $scope.selectedCourceList = disPopCourcesList[btn];
        $scope.selectedList = disPopCourcesList[btn];
    };

    $scope.showDetailedContent = function () {
        $scope.disPopOverlay = !$scope.disPopOverlay;
        // Utility.hideScroll($('body')[0]);
    };

    $scope.navNext = function () {
         var dpc = $('.videos');
        dpc.removeClass('slide-prev-left');
        var selectList = _.first($scope.selectedList, 3);
        var index = _.last(selectList).id;
        if (index + 1 <= $scope.selectedCourceList.length) {
            //removing first element
            selectList.splice(0, 1);

            //adding next element
            selectList.push($scope.selectedCourceList[index], 0);
            $scope.selectedList = selectList;
        } else {
            index = 0;
            //removing first element
            selectList.splice(0, 1);
            //adding next element
            selectList.push($scope.selectedCourceList[index], 0);
            $scope.selectedList = selectList;
        }
    };

    $scope.navPrev = function () {
        console.log('nav prev');
        var dpc = $('.videos');
        dpc.addClass('slide-prev-left');
        var selectList = _.first($scope.selectedList, 3);
        var index = _.first(selectList).id;
        if (index - 1 > 0) {
            //removing last element
            selectList.splice(selectList.length - 1, 1);

            //adding first element
            selectList.splice(0, 0, $scope.selectedCourceList[index - 2]);
            $scope.selectedList = selectList;
        }
    };

    var fn = function () {

        if (!$scope.modalShown) {
            $scope.navNext();
        }
    };
    $interval(fn, 3000);
    
}]);


/*-----  End of Controller = Home  ------*/