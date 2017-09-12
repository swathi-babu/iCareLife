
/*=====================================================
=>                  Controller = aboutMeController
=======================================================*/
/*global app, $http*/

app.controller('myProfileCtrl', ['$http', '$scope', '$rootScope', 'myProfileAPI','countryAPI','setValue', function  ($http, $scope, $rootScope, myProfileAPI,countryAPI,setValue) {
	
	'use strict';


  $scope.spElderCareContentMyProfile = false;
  $scope.spDriverCotentMyProfile = false;
  $scope.spChildCareContentMyProfile = false;
  

  if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
    $scope.spElderCareContentMyProfile = false;
    $scope.spDriverCotentMyProfile = true;
    $scope.spChildCareContentMyProfile = true;  

  }  else if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
    $scope.spElderCareContentMyProfile = true;
    $scope.spDriverCotentMyProfile = true;
    $scope.spChildCareContentMyProfile = false;

  }  else {
    $scope.spElderCareContentMyProfile = true;
    $scope.spDriverCotentMyProfile = false;
    $scope.spChildCareContentMyProfile = true;
  }

  $scope.Request = {};
  $scope.countryName = ['India', 'USA', 'Germany'];
  $scope.stateName = ['Karnataka', 'A.P.', 'M.P', 'Texas'];
  $scope.payRate = ['$100', '$200', '$300'];
  $scope.others = false;
  $scope.bonus = false;
  $scope.phone = false;
  $scope.food = false;
  //$scope.countries = [];
  $scope.selectedCountries = [];


  $scope.getSelectedCountriesName = function(){
    console.log($scope.selectedCountry);
    if($scope.selectedCountry.length >3) {
      $scope.selectedCountry.shift();
    } 
  }
  
  var getMyProfileData = function () {
    myProfileAPI.getProfileDetails($scope.user)
      .then(function (data) {
        if (data != null) {
          console.log(data);
          countryAPI.getCountry()
          .then(function (data) {
            if (data != null) {
              $scope.countries = data;
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });
          $scope.getmyProfile(data);
        }
      },
    function (err) {
      if (err) {
        $scope.loginErrorMsg = err.message;    
      }
      console.log('error' , err);
    });
  };

  $scope.getmyProfile = function(data) {

    if (data['care_requirements'][0] && data['care_requirements'][0]['can_volunteer_for_social_care_services'] != null) {
      $scope.volunteerservice = data['care_requirements'][0] && data['care_requirements'][0]['can_volunteer_for_social_care_services'];
      if($scope.volunteerservice) {
        $scope.volunteerservice = '1';
      } else {
        $scope.volunteerservice = '0';
      }
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_bonus'] != null) {
      $scope.bonus= data['care_requirements'][0] && data['care_requirements'][0]['may_need_bonus'];
    }
          
    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_food'] != null) {
      $scope.food= data['care_requirements'][0] && data['care_requirements'][0]['may_need_food'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_phone'] != null) {
      $scope.phone = data['care_requirements'][0] && data['care_requirements'][0]['may_need_phone'];
    }        

    if (data['care_requirements'][0] && data['care_requirements'][0]['health_insurance'] != null ) {
      $scope.others = data['care_requirements'][0] && data['care_requirements'][0]['health_insurance'];
    } 

    if (data['care_requirements'][0] && data['care_requirements'][0]['can_give_medical_test_if_sponsored'] != null) {
      $scope.medicalTest = data['care_requirements'][0] && data['care_requirements'][0]['can_give_medical_test_if_sponsored'];
      if($scope.medicalTest) {
        $scope.medicalTest = '1'
      } else {
        $scope.medicalTest = '0';
      }
    }  

    if (data['care_requirements'][0] && data['care_requirements'][0]['trial_for_free'] != null) {
      $scope.trialPeriod = data['care_requirements'][0] && data['care_requirements'][0]['trial_for_free'];
      if($scope.trialPeriod) {
        $scope.trialPeriod = '1';
      } else {
        $scope.trialPeriod = '2';
      }
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_email'] != null) {
      $scope.email = data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_email'];
    } 

    if (data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_phone'] != null) {
       $scope.phone1 = data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_phone'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_day'] != null) {
      $scope.salaryperday = data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_day'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_month'] != null) {
      $scope.salarypermonth = data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_month'];
    }

    if(data['care_requirements'][0]['id'] != null) {
      $scope.myProfileId = data['care_requirements'][0]['id'];
    }
   
    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_1'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_1']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_2'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_2']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_3'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_3']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country'] != null) {
      //$scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country']);
      $scope.relocateCountry = data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country'];
      $scope.selectedCountry = $scope.getSelectedValue($scope.relocateCountry,'2');
    }


    if(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_state'] != null) {
      //$scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country']);
      $scope.relocateState = data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_state'];
      $scope.relocateState = $scope.getSelectedValue($scope.relocateState,'3');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['resume_template'] != null) {
      var resume = data['care_requirements'][0] && data['care_requirements'][0]['resume_template'];
      $('#template'+resume).parentsUntil( ".thumbnail" ).addClass("selected-resume");
    }

  }

  $scope.getSelectedValue = function (selectedValue,type) {
  var getSelectedCountryList = [];
  var getRelocatCountryList = '';
  var getRelocateStateList = '';
    countryAPI.getCountry()
          .then(function (data) {
            if (data != null) {
              if(type == '1') {
                for(var count =0;count < selectedValue.length; count++) {
                  for(var countryCount=0 ; countryCount < data.length; countryCount ++) {
                    if(selectedValue[count] == data[countryCount].name) {
                      getSelectedCountryList.push({id: data[countryCount].id, name: data[countryCount].name})
                    }
                  }
                  $scope.selectedCountry =getSelectedCountryList;
                }
               }
            if(type =="2") {
              console.log(selectedValue,type);
              for(var countryCount1=0 ; countryCount1 < data.length; countryCount1 ++) {
                  if(selectedValue == data[countryCount1].name) {
                    getRelocatCountryList = ({id: data[countryCount1].id, name: data[countryCount1].name})
                    console.log(getRelocatCountryList);
                  }
                  $scope.relocateCountry = getRelocatCountryList;
                }
            }
            if(type =="3") {
              console.log(getRelocateStateList);
              $scope.selectState = getRelocateStateList;
              }   
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });
  
         
/*
    if(selectedValue == null || dropdowns == null) {
      return false;
    }

    var scope = {};
    
    for (var i in dropdowns) {
      var option = dropdowns[i];
      console.log(dropdowns[i]);
      if (option.name === selectedValue) {
        scope = option;
        break;
      }
    }

    return scope;*/
  };

  $scope.getStates = function(){
    var countryId = $scope.relocateCountry[0]['id'];
    countryAPI.getStates(countryId)
          .then(function (data) {
            if (data != null) {
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });


  };

  getMyProfileData();


  // Post APi for Elder Care

/*=====================================================
  =>            Service Provider Elder Care
=======================================================*/
$scope.submitRefCheckForElder = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForElderPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForElderPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }

/*=====================================================
  =>            Service Provider Child Care
=======================================================*/
$scope.submitRefCheckForChild = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForChildPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
           /* "resume_template": 1,
            "enable_resume_service": true,
            "i_agree": true*/
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForChildPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }


/*=====================================================
  =>            Service Provider Driver Care
=======================================================*/
$scope.submitRefCheckForDriver = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForDriverPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
           /* "resume_template": 1,
            "enable_resume_service": true,
            "i_agree": true*/
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForDriverPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
  //Common Function For Form Submit
  $scope.formSubmit = function(data){
    myProfileAPI.postProfileDetails(data)
      .then(function (data) {
        console.log('success'+data);
        console.log(data);
      },
      function (err) {
        $scope.loginErrorMsg = err.message;
      });
  };
  
  $scope.getSelectedHeader = function(selectedTab) {

    Utility.carsouelCalling();
    Utility.getSelectedHeader(selectedTab);
  };

  $scope.selectResume = function(id){
    Utility.resumeSelector(id);
    $scope.resumename = $('#'+id).next().val();
    ;
  }
  
}]);