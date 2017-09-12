
/*================================================================
=>                  Controller = Myskillsctrl
==================================================================*/
/*global app jshint camelcase: true*/

app.controller('MyskillsCtrl', ['$scope', '$rootScope', 'setValue', 'mySkillsAPI', 'countryAPI', 'notifyManager', function ($scope, $rootScope, setValue, mySkillsAPI, countryAPI, notifyManager) {

	'use strict';

	$scope.getSelectedHeader = function (selectedTab) {
		Utility.getSelectedHeader(selectedTab);
	};
  
  $scope.getDetailsInfo = {};

  /*
  * GET Country API
  *  1. Make GET API and populate in select option
  *  2. On selecting country, get states and show it to user
  */

  var getCountryList = function () {
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
  };
  getCountryList();

    /* Get my skills details for driver and populate in form
    * 1. Get from token after login
    * 2. Make API call
    * 3. Populate data in form
    */

  var getDriverInfo = function (serviceType) {
      
      mySkillsAPI.getDetails(serviceType)
          .then(function (data) {
              if (data !== null) {
                $scope.getDetailsInfo = data;
                $scope.vehicleBrands = data.options.car_brands;
                $scope.verificationType = data.verification_types;

                setTimeout(function(){ $scope.driverDetailsInfo(); }, 2000);
                
              }
          },
          function (err) {
              if (err) {
                  notifyManager.show('Failed to get myskills details', 'error');
                  console.log('error',err);
              }
          });
  };

  /* Get my skills details for ElderCare and populate in form
  * 1. Get from token after login
  * 2. Make API call
  * 3. Populate data in form
  */
  var getElderCareInfo = function (serviceType) {

      mySkillsAPI.getDetails(serviceType)
          .then(function (data) {
              if (data !== null) {
                $scope.getElderDetailsInfo = data;
                $scope.elderCareDetailsInfo();

              }
          },
          function (err) {
              if (err) {
                  notifyManager.show('Failed to get myskills details', 'error');
                  console.log('error',err);
              }
          });
  };

	/* Hide and Show the Content Based on THe User Selection*/
  $scope.elderCareContentMySkills = false;
	$scope.driverCotentMySkills = false;
	$scope.displayDiseaseType = true;
	$scope.hideDiseaseType = true;
	$scope.showPartTimeTable = true;
	$scope.hidePartTimeTable = false;
	$scope.childCareContent = false;
  $scope.multipleChildField = true;
  $scope.childSpecialNeeds = true;
  if (setValue.getProfileType() === 'Service Provider' && (setValue.getDomains() === 'Elder Caregiver Job' || setValue.getDomains() === 'Elder Caregiver') && (setValue.getAccessReasons() === 'Get a Job' || setValue.getAccessReasons() === 'Learn/Get Trained')) {
    $scope.elderCareContentMySkills = false;
		$scope.driverCotentMySkills = true;
		$scope.childCareContent = true;
    $scope.serviceType = 'elder_care';
    getElderCareInfo($scope.serviceType);

	} else if (setValue.getProfileType() === 'Service Provider' && (setValue.getDomains() === 'Child Caregiver' || setValue.getDomains() === 'Child Caregiver Job' || setValue.getDomains() === 'Baby Caregiver Job' || setValue.getDomains() === 'Baby Caregiver') &&  (setValue.getAccessReasons() === 'Get a Job' || setValue.getAccessReasons() === 'Learn/Get Trained')) {
		$scope.childCareContent = false;
		$scope.elderCareContentMySkills = true;
		$scope.driverCotentMySkills = true;
	} else {
		$scope.elderCareContentMySkills = true;
		$scope.driverCotentMySkills = false;
		$scope.childCareContent = true;
    $scope.serviceType = 'driver';
    getDriverInfo($scope.serviceType);
	}

  //Initializing
  $scope.$broadcast('refreshSlider');
  $scope.years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.knowTwoWheeler = 'false';
  $scope.knowFourWheeler = 'false';
  $scope.knowLightVehicle = 'false';
  $scope.knowHeavyVehicle = 'false';
  $scope.maintenanceCheck = 0;
  $scope.carCleaning = 0;
  $scope.minorRepairs = 0;
  $scope.isProfessional = 0;
  $scope.carServicing = 0;
  $scope.buyingGrocery = 0;
  $scope.personalSecurity = 0;
  $scope.firstAidCare = 0;
  $scope.runningErrand = 0;
  $scope.buyingGrocer = 0;
  $scope.firstAidTraining = 0;
  $scope.certifiedInstructor = 0;
  $scope.icareCertified = 0;
  $scope.defenceDriving = 0;
  $scope.flexibleAvail = false;
  $scope.otherOption = '';
  $scope.otherChoice = '';
  $scope.doOtherChoice = '';
  $scope.CountryValue = 1;
  $scope.StateValue = 1;
  $scope.CityValue = 1;
  $scope.selectedCountry = 0;

  $scope.fullTimeJob = 0;
  $scope.partTimeJob = 0;
  $scope.tempTimeJobDay = 0;
  $scope.tempTimeJobHour = 0;
  $scope.isProfessionalYes = false;
  $scope.isProfessionalNo = false;


  $scope.timeSelection = [
    {
        'id'  : 1,
        'time': '1'
    },
    {
        'id'  : 2,
        'time': '2'
    },
    {
        'id'  : 3,
        'time': '3'
    },
    {
        'id'  : 4,
        'time': '4'
    },
    {
        'id'  : 5,
        'time': '5'
    },
    {
        'id'  : 6,
        'time': '6'
    },
    {
        'id'  : 7,
        'time': '7'
    },
    {
        'id'  : 8,
        'time': '8'
    },
    {
        'id'  : 9,
        'time': '9'
    },
    {
        'id'  : 10,
        'time': '10'
    },
    {
        'id'  : 11,
        'time': '11'
    },
    {
        'id'  : 12,
        'time': '12'
    }
  ];

  $scope.timeShift = [
    {
        'id'  : 0,
        'shift': 'AM'
    },
    {
        'id'  : 1,
        'shift': 'PM'
    }
  ];

  //Time shift for parttime/fulltime/temporaty jobs
  $scope.mondayFromTime = '';
  $scope.mondayToTime = '';
  $scope.mondayToShift = '';
  $scope.mondayFromShift = '';

  $scope.tuesdayFromTime = '';
  $scope.tuesdayToTime = '';
  $scope.tuesdayToShift = '';
  $scope.tuesdayFromShift = '';

  $scope.wednesdayFromTime = '';
  $scope.wednesdayToTime = '';
  $scope.wednesdayToShift = '';
  $scope.wednesdayFromShift = '';

  $scope.thursdayFromTime = '';
  $scope.thursdayToTime = '';
  $scope.thursdayToShift = '';
  $scope.thursdayFromShift = '';

  $scope.fridayFromTime = '';
  $scope.fridayToTime = '';
  $scope.fridayToShift = '';
  $scope.fridayFromShift = '';

  $scope.saturdayFromTime = '';
  $scope.saturdayToTime = '';
  $scope.saturdayToShift = '';
  $scope.saturdayFromShift = '';

  $scope.sundayFromTime = '';
  $scope.sundayToTime = '';
  $scope.sundayToShift = '';
  $scope.sundayFromShift = '';
  $scope.selectedYear = {};
  $scope.selectedCar = {
    id : ''
  };




  $scope.countries = {
      selectedCountry: null,
      selectedYear: null,
      selectedCar: null
  };

    //Get states using selected country
	$scope.selectCountryList = function () {

		if($scope.selectedCountry == '' || $scope.selectedCountry == undefined) {
			return false;
		}

		$scope.countryID = $scope.selectedCountry['id'];

		countryAPI.getStates($scope.countryID)
	  	.then(function (data) {
				if (data != null) {
					$scope.states = data;
					$('.stateField').removeAttr('disabled');
				}
			},
			function (err) {
				notifyManager.show('Failed to fetch states', 'error');
			});
	};


	//get stateID
	$scope.selectedStateList = function () {
		if($scope.selectedState == '' || $scope.selectedState == undefined) {
			return false;
		}

		$scope.stateID = $scope.selectedState['id'];
	};

	//User data form submission
	var submitForm = function (userData) {
		mySkillsAPI.saveDetails(userData)
		.then(function (data) {

			if (data != null && data.message == 'success') {
				notifyManager.show('Successfully submitted', 'success');
			}
		},
		function (err) {

			notifyManager.show('Failed to submit', 'error');
		});
	};

	//Experince details submittion
	$scope.submitExpDetails = function () {

    if ($scope.serviceType === 'driver') {
      $scope.submitDriverExperiance();
    } else if ($scope.serviceType === 'elder_care') {
      $scope.submitElderCareExperiance();
    } else {
      $scope.submitBabyCareExperiance();
    }

	};


	//Availabitlity details submittion
	$scope.submitAvailForm = function () {

    if ($scope.serviceType === 'driver' || $scope.serviceType === 'elder_care') {
      $scope.submitDriverAvailability();
    } else {
      $scope.submitBabyCareExperiance();
    }
    

	};


	/* Driver Capability form
	* 1. get user details
	*	2. Submit to API and show response on click on next
	*/

	//Capability details submittion
	$scope.submitCapabilityForm = function () {

    if ($scope.serviceType === 'driver') {
      $scope.submitDriverCapability();
    } else if ($scope.serviceType === 'elder_care') {
      $scope.submitElderCareCapability();
    } else {
      $scope.submitBabyCareExperiance();
    }
		
	};


  $scope.submitDriverExperiance = function () {
    var userDetails = {
      'authentication_token': $rootScope.authToken,
      'service_type': $scope.serviceType,
      'user' : {
        'skip_validation': 'true',
        'care_provider_skills_for_driver_attributes' : {
                'id': ($scope.carProviderId)? $scope.carProviderId : null,
                'skip_validation': 'true',
                'can_drive_two_wheeler': $scope.knowTwoWheeler,
                'can_drive_four_wheeler': $scope.knowFourWheeler,
                'can_drive_light_commercial_vehicle': $scope.knowLightVehicle,
                'can_drive_heavy_vehicle': $scope.knowHeavyVehicle,
                'driver_or_chauffeur_experience': $scope.selectedYear['time'],
                'experience_in_driving_brand_vehicle': $scope.selectedCar['id']
            },
            'user_location_familiarities_attributes': {
                '0': {
                    'id': $scope.userFamiliaritiesId ? $scope.userFamiliaritiesId : null,
                    'country': $scope.countryID,
                    'state': $scope.stateID || 1,
                    'city': $scope.cityID,
                    'familiarity_on_country': $scope.CountryValue,
                    'familiarity_on_state': $scope.StateValue,
                    'familiarity_on_city': $scope.CityValue
                }
            }
        }
    };

    //Make API call
    submitForm(userDetails);
  };

  $scope.submitDriverAvailability = function () {
    var userDetails = {
            'authentication_token': $rootScope.authToken,
            'service_type': $scope.serviceType,
            'user' : {
                'skip_validation': 'true',
                'care_availability_attributes': {
                    'id': $scope.availabilityId ? $scope.availabilityId : null,
                    'start_date': $('.available-date').val(),
                    // "end_date": "2015-03-19", //TODO ask about this option
                    'flexible_availablity': $scope.flexibleAvail,
                    'full_time_job': $scope.fullTimeJob,
                    'part_time_job': $scope.partTimeJob,
                    'temporary_days_job': $scope.tempTimeJobDay,
                    'temporary_hours_job': $scope.tempTimeJobHour,
                    'sunday_start_time': $scope.sundayFromTime['id'],
                    'sunday_start_shift': $scope.sundayFromShift['shift'],
                    'sunday_end_time': $scope.sundayToTime['id'],
                    'sunday_end_shift': $scope.sundayToShift['shift'],
                    'monday_start_time': $scope.mondayFromTime['id'],
                    'monday_start_shift': $scope.mondayFromShift['shift'],
                    'monday_end_time': $scope.mondayToTime['id'],
                    'monday_end_shift': $scope.mondayToShift['shift'],
                    'tuesday_start_time': $scope.tuesdayFromTime['id'],
                    'tuesday_start_shift': $scope.tuesdayFromShift['shift'],
                    'tuesday_end_time': $scope.tuesdayToTime['id'],
                    'tuesday_end_shift': $scope.tuesdayToShift['shift'],
                    'wednesday_start_time': $scope.wednesdayFromTime['id'],
                    'wednesday_start_shift': $scope.wednesdayFromShift['shift'],
                    'wednesday_end_time': $scope.wednesdayToTime['id'],
                    'wednesday_end_shift': $scope.wednesdayToShift['shift'],
                    'thursday_start_time': $scope.thursdayFromTime['id'],
                    'thursday_start_shift': $scope.thursdayFromShift['shift'],
                    'thursday_end_time': $scope.thursdayToTime['id'],
                    'thursday_end_shift': $scope.thursdayToShift['shift'],
                    'friday_start_time': $scope.fridayFromTime['id'],
                    'friday_start_shift': $scope.fridayFromShift['shift'],
                    'friday_end_time': $scope.fridayToTime['id'],
                    'friday_end_shift': $scope.fridayToShift['shift'],
                    'saturday_start_time': $scope.saturdayFromTime['id'],
                    'saturday_start_shift': $scope.saturdayFromShift['shift'],
                    'saturday_end_time': $scope.saturdayToTime['id'],
                    'saturday_end_shift': $scope.saturdayToShift['shift']
                }
            }
    };

    //Make API call
    submitForm(userDetails);
  };

  $scope.submitDriverCapability = function () {
    var userDetails = {
            'authentication_token': $rootScope.authToken,
            'service_type': $scope.serviceType,
            'user' : {
                'skip_validation': 'true',
                'care_requirements_for_driver_attributes': {
                    'id' : $scope.carRequerimentsId ? $scope.carRequerimentsId: null,
                    'is_trained_driver_chauffeur': $scope.isProfessional,
                    'can_do_maintenance_check': $scope.maintenanceCheck,
                    'can_do_car_cleaning': $scope.carCleaning,
                    'can_do_minor_repairs': $scope.minorRepairs,
                    'can_do_car_servicing': $scope.carServicing,
                    'can_do_other': $scope.otherChoice,
                    'can_also_do_personal_security': $scope.personalSecurity,
                    'can_also_do_first_aid_care': $scope.firstAidCare,
                    'can_also_do_running_errands': $scope.runningErrand,
                    'can_also_do_grocery_buying': $scope.buyingGrocery,
                    'can_also_do_other': $scope.doOtherChoice,
                    'first_aid_trained': $scope.firstAidTraining,
                    'certified_instructor': $scope.certifiedInstructor,
                    'icare_certified': $scope.icareCertified,
                    'recognised_defensive_driver': $scope.defenceDriving,
                    'other': $scope.otherOption,
                    //TODO Something more I know is attribute in API
                }
            }
        };

    //Make API call
    submitForm(userDetails);
  }




  //Elder care API Integration Starts
  $scope.below65 = "";
  $scope.between65To74 = "";
  $scope.between75To84 = "";
  $scope.above85 = "";
  $scope.eledersAtOneTime = "";
  $scope.careDifficult = 0;
  $scope.careFrail = 0;
  $scope.paidAssistance = "";
  $scope.isHanleElderYes = 0;
  $scope.isHanleElderNo = 0;
  $scope.careDifficult = 0;
  $scope.cognitiveIssue = 0;
  $scope.medicalIssue = 0;
  $scope.physicalIssue = 0;
  $scope.socialIssue = 0;
  $scope.visionEyeDis = "";
  $scope.sleepDisorders = "";
  $scope.sensoryInteDis = "";
  $scope.seizures = "";
  $scope.parkinsons = "";
  $scope.osteoporosis = "";
  $scope.muscularDystrophy = "";
  $scope.mentalIllness = "";
  $scope.lungDisease = "";
  $scope.incontinence = "";
  $scope.heartDisease = "";
  $scope.hearingLoss = "";
  $scope.fragileSyndrome = "";
  $scope.dyslexia = "";
  $scope.diabetes = "";
  $scope.depression = "";
  $scope.cysticFibrosis = "";
  $scope.cancer = "";
  $scope.arthritis = "";
  $scope.alzheimer = "";

  $scope.submitElderCareExperiance = function () {
      var userDetails = {
        'authentication_token': $rootScope.authToken,
        'service_type': $scope.serviceType,
        'user': {
            'skip_validation': 'true',
            'elder_care_experience_attributes': {
              'id': $scope.elderCareExperianceId ? $scope.elderCareExperianceId : null,
              'care_below_65_years': $scope.below65['id'],
              'care_65_74_years': $scope.between65To74['id'],
              'care_75_84_years': $scope.between75To84['id'],
              'care_85_plus_years': $scope.above85['id'],
              'care_multiple': $scope.eledersAtOneTime['id'],
              'care_difficult': $scope.careDifficult, 
              'care_frail': $scope.displayDiseaseType ? 0 : 1, 
              'care_paid_assistance_for_years': $scope.paidAssistance['id'],
              'care_cognitive_issues': $scope.cognitiveIssue,
              'care_medical_issues': $scope.medicalIssue,
              'care_physical_issues': $scope.physicalIssue,
              'care_social_issues': $scope.socialIssue,
              'alzheimer_months': $scope.alzheimer['id'],
              'arthritis_months': $scope.arthritis['id'],
              'cancer_months': $scope.cancer['id'],
              'cystic_fibrosis_months': $scope.cysticFibrosis['id'],
              'depression_months': $scope.depression['id'],
              'diabetes_months': $scope.diabetes['id'],
              'dyslexia_months': $scope.dyslexia['id'],
              'fragile_x_syndrome_months': $scope.fragileSyndrome['id'],
              'hearing_loss_months': $scope.hearingLoss['id'],
              'heart_disease_months': $scope.heartDisease['id'],
              'incontinence_months': $scope.incontinence['id'],
              'lung_disease_months': $scope.lungDisease['id'],
              'mental_illness_months': $scope.mentalIllness['id'],
              'muscular_dystrophy_months': $scope.muscularDystrophy['id'],
              'osteoporosis_months': $scope.osteoporosis['id'],
              'parkinsons_disease_months': $scope.parkinsons['id'],
              'seizures_months': $scope.seizures['id'],
              'sensory_disorder_months': $scope.sensoryInteDis['id'],
              'sleep_disorder_months': $scope.sleepDisorders['id'],
              'vision_disorder_months': $scope.visionEyeDis['id']
            }
        }
      };
      //Make API call
      submitForm(userDetails);
  };


  //Elder Care Capability submit button

  $scope.trainedProfessionalEC = 0;
  $scope.trainedProfessionalECYes = 0;
  $scope.trainedProfessionalECNo = 0;


  $scope.submitElderCareCapability = function () {
      var userDetails = {
        'authentication_token': $rootScope.authToken,
        'service_type': $scope.serviceType,
        'user': {
            'skip_validation': 'true',
            'care_ability_attributes': {
              'id': $scope.elderCareAbilityId ? $scope.elderCareAbilityId : null,
              'professionally_trained': $scope.trainedProfessionalEC ? 1:0,
              'institution_1_name': $scope.institutionName, //text
              'care_cleaning': $scope.elderCareCarCleaning ? 1:0,
              'care_to_school': $scope.elderCareSchool? 1:0,
              'care_food_planning': $scope.elderCareFoodPlanning? 1:0,
              'accompanying_elder':  $scope.elderCareAccompanying? 1:0,
              'care_medical_assistance': $scope.medicalAssistance? 1:0,
              'care_emotional_support': $scope.emotionalSupport? 1:0,
              'care_safety_needs': $scope.trendingSafetyNeeds? 1:0,
              'care_counselling': $scope.counselling? 1:0,
              'care_pet_assistance': $scope.elderCareAssitancePets? 1:0,
              'care_first_aid': $scope.firstAidTraining? 1:0,
              'care_crn': $scope.elderCareCrn? 1:0,
              'care_cpr': $scope.elderCareCpr? 1:0,
              'care_certfied_nurse': $scope.elderCareCertifiedNurse? 1:0,
              'care_special_needs': $scope.specialNeedsCare? 1:0,
              'care_certified_icare': $scope.icareCertified? 1:0,
              'care_cooking': $scope.elderCareCooking? 1:0,
              'care_shopping': $scope.groceryShopping? 1:0,
              'care_laundry': $scope.familyLaundry? 1:0,
              'care_errands': $scope.runningErrands? 1:0,
              'care_housekeeping': $scope.lightHouseKeeping? 1:0,
              'care_medical_appointments': $scope.elderMedicalAppoinments? 1:0,
              'care_others': $scope.doOtherChoice, //text
              'note': $scope.moreSomething, //text
              'primary_task_or_responsibility':   $scope.otherChoice,
              'additional_assit':  $scope.otherOption
            }
        }
      };

      //Make API call
      submitForm(userDetails);

  };

  //Baby Care API integrationstarts
  $scope.submitBabyCareExperiance = function () {

  };


  
  /* Manipulation of data
  * 1. Driver
  * 2. Elder
  * 3. BabyCare
  */

  //Driver data manipulation
  $scope.driverDetailsInfo = function () {

    if ($scope.getDetailsInfo.care_provider_skills_for_driver_attributes.length != 0) {
        $scope.carProviderId = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['id'];
        ///setting value for experiance
        $scope.knowTwoWheeler = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_two_wheeler'];
        $scope.knowFourWheeler = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_four_wheeler'];
        $scope.knowLightVehicle = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_light_commercial_vehicle'];
        $scope.knowHeavyVehicle = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_heavy_vehicle'];

        var driverOrCheffeurExp = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['driver_or_chauffeur_experience'];
        if (driverOrCheffeurExp) {
            $scope.selectedYear = $scope.setSelectedOptions(driverOrCheffeurExp, $scope.timeSelection);
        }

        var brandVechile = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['experience_in_driving_brand_vehicle'];
        if (brandVechile) {
          $scope.selectedCar = $scope.setSelectedOptions(brandVechile, $scope.vehicleBrands);
        }
    }

    if ($scope.getDetailsInfo.user_location_familiarities_attributes.length != 0) {

      $scope.userFamiliaritiesId = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['id'];
      $scope.cityID = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['city'];
      
      // setting country Id
      var countryId = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['country'];
      if (countryId) {
          $scope.selectedCountry = $scope.setSelectedOptions(countryId, $scope.countries);
          $scope.countryID = $scope.selectedCountry['id'];
      }
      
      $scope.CountryValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_country'];
      $scope.StateValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_state'];
      $scope.CityValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_city'];
    }

    //setting value for Availability
    setValueForAvailability();

    //setting available for capabilities  
    if ($scope.getDetailsInfo.care_requirements_for_driver_attributes != 0) {
        $scope.carRequerimentsId = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['id'];
        var val = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['is_trained_driver_chauffeur'];
        if (val) {
          $scope.isProfessionalYes = val;
          $scope.isProfessional = val;
          $('#schoolName').removeAttr('disabled').attr('required');
        }
        else {
          $scope.isProfessionalNo = val;
          $scope.isProfessional = val;
          $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
        }

        $scope.maintenanceCheck = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_maintenance_check']; 
        $scope.carCleaning = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_car_cleaning'];
        $scope.minorRepairs = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_minor_repairs'];
        $scope.carServicing = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_car_servicing'];
        $scope.otherChoice = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_other'];
        $scope.personalSecurity = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_personal_security'];
        $scope.firstAidCare = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_first_aid_care'];
        $scope.runningErrand = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_running_errands'];
        $scope.buyingGrocery =$scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_grocery_buying'];
        $scope.doOtherChoice = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_other'];
        $scope.firstAidTraining = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['first_aid_trained'];
        $scope.certifiedInstructor = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['certified_instructor'];
        $scope.icareCertified = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['icare_certified'];
        $scope.defenceDriving = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['recognised_defensive_driver'];
        $scope.otherOption = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['other'];
    }
  };

  var setValueForAvailability = function () {
      var availabilityData = null;
      if ($scope.serviceType === 'driver') {
        availabilityData = $scope.getDetailsInfo.care_availability_attributes;
      } else if ($scope.serviceType === 'elder_care') {
        availabilityData = $scope.getElderDetailsInfo.care_availability_attributes;
      }

      if (availabilityData.length != 0) {
        $scope.availabilityId = availabilityData[0]['id'];
        $scope.availableDate = availabilityData[0]['start_date'];
        $('.available-date').val($scope.availableDate);
        $scope.flexibleAvail = availabilityData[0]['flexible_availablity'].toString();
        $scope.fullTimeJob = availabilityData[0]['full_time_job'];
        $scope.partTimeJob = availabilityData[0]['part_time_job'];
        $scope.tempTimeJobDay = availabilityData[0]['temporary_days_job'];
        $scope.tempTimeJobHour = availabilityData[0]['temporary_hours_job'];

        //Sunday From and To time Set
        var sundayFromTime = availabilityData[0]['sunday_start_time'];
        var sundayFromShift = availabilityData[0]['sunday_start_shift']
        if (sundayFromTime && sundayFromShift) {
          $scope.sundayFromTime = $scope.setSelectedOptions(sundayFromTime, $scope.timeSelection);
          $scope.sundayFromShift = $scope.setSelectedOptionsForShift(sundayFromShift, $scope.timeShift);
        }

        var sundayToTime = availabilityData[0]['sunday_end_time'];
        var sundayToShift = availabilityData[0]['sunday_end_shift']
        if (sundayToTime && sundayToShift) {
          $scope.sundayToTime = $scope.setSelectedOptions(sundayToTime, $scope.timeSelection);
          $scope.sundayToShift = $scope.setSelectedOptionsForShift(sundayToShift, $scope.timeShift);
        }

        //Monday From and To time Set
        var mondayFromTime = availabilityData[0]['monday_start_time'];
        var mondayFromShift = availabilityData[0]['monday_start_shift']
        if (mondayFromTime && mondayFromShift) {
          $scope.mondayFromTime = $scope.setSelectedOptions(mondayFromTime, $scope.timeSelection);
          $scope.mondayFromShift = $scope.setSelectedOptionsForShift(mondayFromShift, $scope.timeShift);
        }

        var mondayToTime = availabilityData[0]['monday_end_time'];
        var mondayToShift = availabilityData[0]['monday_end_shift']
        if (mondayToTime && mondayToShift) {
          $scope.mondayToTime = $scope.setSelectedOptions(mondayToTime, $scope.timeSelection);
          $scope.mondayToShift = $scope.setSelectedOptionsForShift(mondayToShift, $scope.timeShift);
        }

        //Tuesday From and To time Set
        var tuesdayFromTime = availabilityData[0]['tuesday_start_time'];
        var tuesdayFromShift = availabilityData[0]['tuesday_start_shift']
        if (tuesdayFromTime && tuesdayFromShift) {
          $scope.tuesdayFromTime = $scope.setSelectedOptions(tuesdayFromTime, $scope.timeSelection);
          $scope.tuesdayFromShift = $scope.setSelectedOptionsForShift(tuesdayFromShift, $scope.timeShift);
        }

        var tuesdayToTime = availabilityData[0]['tuesday_end_time'];
        var tuesdayToShift = availabilityData[0]['tuesday_end_shift']
        if (tuesdayToTime && tuesdayToShift) {
          $scope.tuesdayToTime = $scope.setSelectedOptions(tuesdayToTime, $scope.timeSelection);
          $scope.tuesdayToShift = $scope.setSelectedOptionsForShift(tuesdayToShift, $scope.timeShift);
        }

        //Wednesday From and To time Set
        var wednesdayFromTime = availabilityData[0]['wednesday_start_time'];
        var wednesdayFromShift = availabilityData[0]['wednesday_start_shift']
        if (wednesdayFromTime && wednesdayFromShift) {
          $scope.wednesdayFromTime = $scope.setSelectedOptions(wednesdayFromTime, $scope.timeSelection);
          $scope.wednesdayFromShift = $scope.setSelectedOptionsForShift(wednesdayFromShift, $scope.timeShift);
        }

        var wednesdayToTime = availabilityData[0]['wednesday_end_time'];
        var wednesdayToShift = availabilityData[0]['wednesday_end_shift']
        if (wednesdayToTime && wednesdayToShift) {
          $scope.wednesdayToTime = $scope.setSelectedOptions(wednesdayToTime, $scope.timeSelection);
          $scope.wednesdayToShift = $scope.setSelectedOptionsForShift(wednesdayToShift, $scope.timeShift);
        }

        //Thursdayday From and To time Set
        var thursdayFromTime = availabilityData[0]['thursday_start_time'];
        var thursdayFromShift = availabilityData[0]['thursday_start_shift']
        if (thursdayFromTime && thursdayFromShift) {
          $scope.thursdayFromTime = $scope.setSelectedOptions(thursdayFromTime, $scope.timeSelection);
          $scope.thursdayFromShift = $scope.setSelectedOptionsForShift(thursdayFromShift, $scope.timeShift);
        }

        var thursdayToTime = availabilityData[0]['thursday_end_time'];
        var thursdayToShift = availabilityData[0]['thursday_end_shift']
        if (thursdayToTime && thursdayToShift) {
          $scope.thursdayToTime = $scope.setSelectedOptions(thursdayToTime, $scope.timeSelection);
          $scope.thursdayToShift = $scope.setSelectedOptionsForShift(thursdayToShift, $scope.timeShift);
        }

        //Friday From and To time Set
        var fridayFromTime = availabilityData[0]['friday_start_time'];
        var fridayFromShift = availabilityData[0]['friday_start_shift']
        if (fridayFromTime && fridayFromShift) {
          $scope.fridayFromTime = $scope.setSelectedOptions(fridayFromTime, $scope.timeSelection);
          $scope.fridayFromShift = $scope.setSelectedOptionsForShift(fridayFromShift, $scope.timeShift);
        }

        var fridayToTime = availabilityData[0]['friday_end_time'];
        var fridayToShift = availabilityData[0]['friday_end_shift']
        if (fridayToTime && fridayToShift) {
          $scope.fridayToTime = $scope.setSelectedOptions(fridayToTime, $scope.timeSelection);
          $scope.fridayToShift = $scope.setSelectedOptionsForShift(fridayToShift, $scope.timeShift);
        }

        //Saturday From and To time Set
        var saturdayFromTime = availabilityData[0]['saturday_start_time'];
        var saturdayFromShift = availabilityData[0]['saturday_start_shift']
        if (saturdayFromTime && saturdayFromShift) {
          $scope.saturdayFromTime = $scope.setSelectedOptions(saturdayFromTime, $scope.timeSelection);
          $scope.saturdayFromShift = $scope.setSelectedOptionsForShift(saturdayFromShift, $scope.timeShift);
        }

        var saturdayToTime = availabilityData[0]['saturday_end_time'];
        var saturdayToShift = availabilityData[0]['saturday_end_shift']
        if (saturdayToTime && saturdayToShift) {
          $scope.saturdayToTime = $scope.setSelectedOptions(saturdayToTime, $scope.timeSelection);
          $scope.saturdayToShift = $scope.setSelectedOptionsForShift(saturdayToShift, $scope.timeShift);
        }
      }
  };

  //ElderCare Data Manipulation
  $scope.elderCareDetailsInfo = function () {

    //Setting data for Experiance
    if ($scope.getElderDetailsInfo.elder_care_experience_attributes.length != 0) {
      $scope.elderCareExperianceId = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['id'];

      var below65 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_below_65_months'];
      if (below65) {
          $scope.below65 = $scope.setSelectedOptions(below65, $scope.timeSelection);
      }

      var between65To74 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_65_74_months'];
      if (below65) {
          $scope.between65To74 = $scope.setSelectedOptions(between65To74, $scope.timeSelection);
      }

      var between75To84 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_75_84_months'];
      if (below65) {
          $scope.between75To84 = $scope.setSelectedOptions(between75To84, $scope.timeSelection);
      }

      var above85 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_85_plus_months'];
      if (above85) {
          $scope.above85 = $scope.setSelectedOptions(above85, $scope.timeSelection);
      }

      var eledersAtOneTime = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_multiple'];
      if (eledersAtOneTime) {
          $scope.eledersAtOneTime = $scope.setSelectedOptions(eledersAtOneTime, $scope.timeSelection);
      }

      $scope.careDifficult = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_difficult'];
      $scope.displayDiseaseType = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_frail'];

      var paidAssistance = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_paid_assistance_for_years'];
      if (paidAssistance) {
          $scope.paidAssistance = $scope.setSelectedOptions(paidAssistance, $scope.timeSelection);
      }

      $scope.cognitiveIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_cognitive_issues'];
      $scope.medicalIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_medical_issues'];
      $scope.physicalIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_physical_issues'];
      $scope.socialIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_social_issues'];

      var alzheimer = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['alzheimer_months'];
      if (alzheimer) {
          $scope.alzheimer = $scope.setSelectedOptions(alzheimer, $scope.timeSelection);
      }

      var arthritis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['arthritis_months'];
      if (arthritis) {
          $scope.arthritis = $scope.setSelectedOptions(arthritis, $scope.timeSelection);
      }

      var cancer = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['cancer_months'];
      if (cancer) {
          $scope.cancer = $scope.setSelectedOptions(cancer, $scope.timeSelection);
      }

      var cysticFibrosis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['cystic_fibrosis_months'];
      if (cysticFibrosis) {
          $scope.cysticFibrosis = $scope.setSelectedOptions(cysticFibrosis, $scope.timeSelection);
      }

      var depression = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['depression_months'];
      if (depression) {
          $scope.depression = $scope.setSelectedOptions(depression, $scope.timeSelection);
      }

      var diabetes = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['diabetes_months'];
      if (diabetes) {
          $scope.diabetes = $scope.setSelectedOptions(diabetes, $scope.timeSelection);
      }

      var dyslexia = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['dyslexia_months'];
      if (dyslexia) {
          $scope.dyslexia = $scope.setSelectedOptions(dyslexia, $scope.timeSelection);
      }

      var fragileSyndrome = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['fragile_x_syndrome_months'];
      if (fragileSyndrome) {
          $scope.fragileSyndrome = $scope.setSelectedOptions(fragileSyndrome, $scope.timeSelection);
      }

      var hearingLoss = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['hearing_loss_months'];
      if (hearingLoss) {
          $scope.hearingLoss = $scope.setSelectedOptions(hearingLoss, $scope.timeSelection);
      }

      var heartDisease = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['heart_disease_months'];
      if (heartDisease) {
          $scope.heartDisease = $scope.setSelectedOptions(heartDisease, $scope.timeSelection);
      }

      var incontinence = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['incontinence_months'];
      if (incontinence) {
          $scope.incontinence = $scope.setSelectedOptions(incontinence, $scope.timeSelection);
      }

      var lungDisease = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['lung_disease_months'];
      if (lungDisease) {
          $scope.lungDisease = $scope.setSelectedOptions(lungDisease, $scope.timeSelection);
      }

      var mentalIllness = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['mental_illness_months'];
      if (mentalIllness) {
          $scope.mentalIllness = $scope.setSelectedOptions(mentalIllness, $scope.timeSelection);
      }

      var muscularDystrophy = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['muscular_dystrophy_months'];
      if (muscularDystrophy) {
          $scope.muscularDystrophy = $scope.setSelectedOptions(muscularDystrophy, $scope.timeSelection);
      }

      var osteoporosis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['osteoporosis_months'];
      if (osteoporosis) {
          $scope.osteoporosis = $scope.setSelectedOptions(osteoporosis, $scope.timeSelection);
      }

      var parkinsons = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['parkinsons_disease_months'];
      if (parkinsons) {
          $scope.parkinsons = $scope.setSelectedOptions(parkinsons, $scope.timeSelection);
      }

      var seizures = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['seizures_months'];
      if (seizures) {
          $scope.seizures = $scope.setSelectedOptions(seizures, $scope.timeSelection);
      }

      var sensoryInteDis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['sensory_disorder_months'];
      if (sensoryInteDis) {
          $scope.sensoryInteDis = $scope.setSelectedOptions(sensoryInteDis, $scope.timeSelection);
      }
      
      var sleepDisorders = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['sleep_disorder_months'];
      if (sleepDisorders) {
          $scope.sleepDisorders = $scope.setSelectedOptions(sleepDisorders, $scope.timeSelection);
      }

      var visionEyeDis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['vision_disorder_months'];
      if (visionEyeDis) {
          $scope.visionEyeDis = $scope.setSelectedOptions(visionEyeDis, $scope.timeSelection);
      }
    }

    //setting data for Availability
    if ($scope.getElderDetailsInfo.care_availability_attributes.length != 0) {
      setValueForAvailability();
    }

    if ($scope.getElderDetailsInfo.care_ability_attributes.length != 0) {
      $scope.elderCareAbilityId = $scope.getElderDetailsInfo.care_ability_attributes[0]['id'];
      $scope.trainedProfessionalEC = $scope.getElderDetailsInfo.care_ability_attributes[0]['professionally_trained'];
      $scope.institutionName = $scope.getElderDetailsInfo.care_ability_attributes[0]['institution_1_name'];
      $scope.elderCareCarCleaning = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cleaning'];
      $scope.elderCareSchool = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_to_school'];
      $scope.elderCareFoodPlanning = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_food_planning'];
      $scope.elderCareAccompanying = $scope.getElderDetailsInfo.care_ability_attributes[0]['accompanying_elder'];
      $scope.medicalAssistance = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_medical_assistance'];
      $scope.emotionalSupport = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_emotional_support'];
      $scope.trendingSafetyNeeds = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_safety_needs'];
      $scope.counselling = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_counselling'];
      $scope.elderCareAssitancePets = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_pet_assistance'];
      $scope.firstAidTraining = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_first_aid'];
      $scope.elderCareCrn = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_crn'];
      $scope.elderCareCpr = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cpr'];
      $scope.elderCareCertifiedNurse = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_certfied_nurse'];
      $scope.specialNeedsCare = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_special_needs'];
      $scope.icareCertified = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_certified_icare'];
      $scope.elderCareCooking = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cooking'];
      $scope.groceryShopping = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_shopping'];
      $scope.familyLaundry = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_laundry'];
      $scope.runningErrands = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_errands'];
      $scope.lightHouseKeeping = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_housekeeping'];
      $scope.elderMedicalAppoinments = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_medical_appointments'];
      $scope.doOtherChoice = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_others'];
      $scope.moreSomething = $scope.getElderDetailsInfo.care_ability_attributes[0]['note'];
      $scope.otherChoice = $scope.getElderDetailsInfo.care_ability_attributes[0]['primary_task_or_responsibility'];
      $scope.otherOption = $scope.getElderDetailsInfo.care_ability_attributes[0]['additional_assit'];
    }
  };




  /***** setting value****/

  $scope.setSelectedOptions = function (seletedValue, optionList) {
    var optionVal = {};
    for (var i in optionList) {
      var option = optionList[i];
      if (option.id === seletedValue) {
        optionVal = option;
        break;
      }
    }
    return optionVal;
  };

  $scope.setSelectedOptionsForShift = function (seletedValue, optionList) {
    var optionVal = {};
    for (var i in optionList) {
      var option = optionList[i];
      if (option.shift === seletedValue) {
        optionVal = option;
        break;
      }
    }
    return optionVal;
  };

  $scope.setDate = function (date) {
    var date = new Date(date);
    date = date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate();
    return date;
  };

  $scope.isProfDriver = function (userValue) {

    if (userValue === 'Yes') {
      $scope.isProfessional = 1;
      $scope.isProfessionalYes = true;
      $('#schoolName').removeAttr('disabled').attr('required');
    }
    else if (userValue === 'No') {
      $scope.isProfessional = 0;
      $scope.isProfessionalYes = false;
      $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
    }

  };

  $scope.isHandleElderlies = function (value) {
    if (value === 'Yes') {
      $scope.careDifficult = 1;
      $scope.isHanleElderYes = 1;
    } else {
      $scope.careDifficult = 0;
      $scope.isHanleElderYes = 0;
    }
  };

  $scope.isTrainedElderCare = function (value) {
    if (value === 'Yes') { 
      $scope.trainedProfessionalEC = 1;
      $scope.trainedProfessionalECYes = 1;
      $scope.trainedProfessionalECNo = 0;
      $('#schoolName').removeAttr('disabled').attr('required');
    } else {
      $scope.trainedProfessionalEC = 0;
      $scope.trainedProfessionalECYes = 0;
      $scope.trainedProfessionalECNo = 1;
      $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
    }
  }


}]);


/*-----  End of Controller = Myskillsctrl  ------*/



