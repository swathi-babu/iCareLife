
/*================================================================
=>                   Controller = userSignupController
==================================================================*/
/*global app, $http, $, localStorage*/

app.controller('signupCtrl', ['$http', '$scope', 'signUp', '$rootScope', 'appConfig', 'countryAPI', 'setValue', function ($http, $scope, signUp, $rootScope, appConfig, countryAPI, setValue) {
    'use strict';


    $scope.parentCourseName = '';
   // debugger;
    $scope.secondLevelCourseName = '';
    $scope.secondList = true;
    $scope.thirdList =  true;
    $scope.jsonFormat = '';
    $scope.keyValues = '';
    $rootScope.selectHeader(1);
    $rootScope.countryList = null;



    var getSignUpUserType = function () {

        signUp.getUserType()
            .then(function (data) {
                $scope.jsonFormat = data.profile_highlights;
                setValue.setCountryList(data.launched_countries);
                $rootScope.countryList = data.launched_countries;
                $scope.keyValues = Object.keys(data.profile_highlights);
            },
            function (error) {
                console.log('error while getting data', error);
            });
    };

    getSignUpUserType();

    var reset = function () {
        if ($scope.userSignupController) {
            $scope.jsonFormat = "null";
            $scope.$apply(); //apply scope value
        }
    };

    $('#usersignupModel').on('click', '.closePopup, .modal-backdrop', function (event) {
        event.preventDefault();
        reset(); //reset form
    });

    $scope.selectUserType = function (values) {
        //console.log('clikcing on 2nd level menu'+values);
        $scope.secondList = false;
        $scope.parentCourseName = values;
        $scope.courseList = '';
        $scope.test = [];
        $scope.wantedCourseList = Object.keys($scope.jsonFormat[values]);
        $rootScope.selectHeader(2);
        $("#submit_id").attr('disabled', true);
        
        $('#list1').on('click', 'li', function () {
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
            var img = $(this).find('img'),
            len = img.length;
            if (len > 0) {
                $('li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
            } else {
            
            }
        });
    };

    $scope.courseName = function (values) {
        $scope.thirdList = false;
        $rootScope.selectHeader(3);
        $scope.secondLevelCourseName = values;
        /*if($scope.test.length == 0) {
            $scope.test = $scope.jsonFormat[$scope.parentCourseName][values];
        } else {*/
            $scope.courseList = $scope.jsonFormat[$scope.parentCourseName][values];
            /*for(var count = 0; count <$scope.courseList.length ;count ++){
                $scope.test.push($scope.courseList[count]);
               // console.log($scope.courseList[count]);
            }
        } */

        $("#submit_id").attr('disabled', true);
        $('#list2').on('click', 'li', function () {
        //alert($(this).html());
            var img = $(this).find('img'),
                len = img.length;
            if (len > 0) {
                $('#listOfWantedCourse li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
                
            } 
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
        });
    };


    $scope.getcourseContent = function (values) {
        /* Once Service will be Ready localStorage Code Will Removed */

        localStorage.setItem('profile_types', $scope.parentCourseName);
        localStorage.setItem('access_reasons', $scope.secondLevelCourseName);
        localStorage.setItem('domains', values);
        /**/
        setValue.setProfileType($scope.parentCourseName);
        setValue.setAccessReasons($scope.secondLevelCourseName);
        setValue.setDomains(values);


        $("#submit_id").removeAttr('disabled');
        $('#list3').on('click', 'li', function () {
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
            var img = $(this).find('img'),
                len = img.length;
            if (len > 0) {
                $('#listOfLookingFor li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
                
            } 
        });
    };

    $scope.selectJustExploring = function (element) {
        localStorage.setItem('access_reasons', 'Just Exploring');
        $("#submit_id").removeAttr('disabled');
        $('#exploring img').attr('src', '../images/check-box.png');
        $rootScope.selectHeader(1);
        $scope.parentCourseName = '';
        $scope.secondLevelCourseName = '';
        $scope.secondList = true;
        $scope.thirdList =  true;
        $scope.wantedCourseList = {};
        $scope.courseList = {};

        var selecetdList = $('#list1');
        selecetdList.find('li.selectedOption img').attr('src', '../images/uncheck-box.png');
        selecetdList.find('li.selectedOption').removeClass('selectedOption');

    };

    $scope.showRegistrationPopup = function() {
        
        $('.setup-account').addClass('none');
        $('.register-module').removeClass('none');
    };

    $scope.showloginpage = function() {
        $('.signup-module').addClass('none');
        $('.login-module').removeClass('none');
    };


}]);

