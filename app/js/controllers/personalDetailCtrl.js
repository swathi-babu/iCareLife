
/*================================================================
=>                  Controller = aboutMeCtrl
==================================================================*/
/*global app*/

app.controller('personalDetailCtrl', ['$scope', '$rootScope', 'aboutAPI', '$timeout', 'notifyManager','setValue', 'countryAPI', function ($scope, $rootScope, aboutAPI, $timeout, notifyManager, setValue, countryAPI) {

	'use strict';

	//Initializing
	$scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
	$scope.genders = [];
	$scope.sameAddress = false;
	
	var $spinner = $('.spin'); //get spinner div

		/* Populate user selected language with slider
	* 1. when user selected know language
	* 2. append language with slider
	*/


	$scope.familyMembers = [{
		'id' : 1,
		'name': 1
	},{
		'id' : 2,
		'name': 2
	}, {
		'id' : 3,
		'name': 3
	},
	{
		'id' : 4,
		'name': 4
	},
	{
		'id' : 5,
		'name': 5
	},
	{
		'id' : 5,
		'name': 5
	},
	{
		'id' : 6,
		'name': 6
	},
	{
		'id' : 7,
		'name': 7
	},
	{
		'id' : 8,
		'name': 8
	},
	{
		'id' : 9,
		'name': 9
	},
	{
		'id' : 10,
		'name': 10
	}];

	//Temporary insurance policy
	$scope.insurancePolicy = [{
		'id' : true,
		'name': 'Yes'
	},
	{
		'id' : false,
		'name': 'No'
	}];


	/* Get About me to populate in form
	* 1. Get from token after login
	* 2. Make API call
	* 3. Populate data in form
	*/

	var getUserDetails = function () {

		$rootScope.showSpinner($spinner); //show spinner

		aboutAPI.getAboutDetails($rootScope.profileType) //passing service type
			.then(function (data) {
				console.log('response --> ', data);
				$rootScope.hideSpinner($spinner); //hide spinner				
				if (data != null) {

					//Dropdown options
					$scope.genderList = data.options['gender'];
					$scope.ethnicityList = data.options['ethnicity'];
					$scope.religionList = data.options['religion'];
					$scope.bloodgroupList = data.options['blood_group'];
					$scope.nationalityList = data.options['nationality'];
					$scope.higherEducationList = data.options['highest_education'];
					$scope.languageList = data.options['language'];
					$scope.martialStatusList = data.options['marital_status'];
					$scope.familyIncomes = data.options['annual_family_income'];
					$scope.identityDocumentType = data.options['identity_document_type'];


					
					/*
					* == Family Information for all service seeker and provider ==
					*/

					var familyDetails = data.family_detail;

					if (familyDetails.id == null) {
						return false;
					}
					else if (familyDetails !== null) {
						$scope.familyID = familyDetails.id;
					}

					//Martial status
					if(familyDetails.marital_status !== null) {
						$scope.martialStatus = getSelectedValue($scope.martialStatusList, parseInt(familyDetails.marital_status));
					}

					//Family members
					if(familyDetails.members_count !== null) {
						$scope.familyMember = getSelectedValue($scope.familyMembers, familyDetails.members_count);
					}

					//Children
					if(familyDetails.children !== null) {
						$scope.children = getSelectedValue($scope.familyMembers, familyDetails.children);
					}

					//Elders
					if(familyDetails.elders !== null) {
						$scope.elder = getSelectedValue($scope.familyMembers, familyDetails.elders);
					}

					//Family income
					if(familyDetails.annual_family_income !== null) {
						$scope.familyIncome = getSelectedValue($scope.familyIncomes, parseInt(familyDetails.annual_family_income));
					}

					//Staying with family
					if(familyDetails.living_with_family !== null) {
						if (familyDetails.living_with_family == true) {
							$scope.stayWithFamily1 = true;
							$scope.stayWithFamily2 = false;
						}
						else if (familyDetails.living_with_family == false) {
							$scope.stayWithFamily2 = true;
							$scope.stayWithFamily1 = false;
						}
					}

					//Bank account
					if(familyDetails.has_bank_account !== null) {
						if (familyDetails.has_bank_account == true) {
							$scope.bankAccount1 = true;
							$scope.bankAccount2 = false;
						}
						else if (familyDetails.has_bank_account == false) {
							$scope.bankAccount2 = true;
							$scope.bankAccount1 = false;
						}
					}

					//Own a House/Flat
					if(familyDetails.own_a_flat_or_house !== null) {
						if (familyDetails.own_a_flat_or_house == true) {
							$scope.ownHouse1 = true;
							$scope.ownHouse2 = false;
						}
						else if (familyDetails.own_a_flat_or_house == false) {
							$scope.ownHouse1 = false;
							$scope.ownHouse2 = true;
						}
					}

					//have insurance
					if(familyDetails.has_insurance !== null) {
						$scope.hasInsurance = getSelectedValue($scope.insurancePolicy, familyDetails.has_insurance);
					}

				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				notifyManager.show('Failed to fetch about me forms', 'error');
			});
	};

	//Loop get value dropdown with selected value to populate
	var getSelectedValue = function (dropdowns, selectedValue) {

		if(selectedValue == null || dropdowns == null) {
			return false;
		}

		var scope = {};
		
		for (var i in dropdowns) {
    	var option = dropdowns[i];
	    if (option.id === selectedValue) {
	      scope = option;
	      break;
	    }
  	}

  	return scope;
	};

	//Populate the country list
	var getCountries = function () {

		$rootScope.showSpinner($spinner); //show spinner

		countryAPI.getCountry()
			.then(function (data) {
				$rootScope.hideSpinner($spinner); //hide spinner
				if (data != null) {
					$scope.countries = data;
					$scope.workEligibilityList = data;
				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				if (err) {
					notifyManager.show('Failed to fetch countries', 'error');
				}
			});

	};

	/*
	* GET API for ELDER CARE
	*	1. Call API and populate options
	* 2. Also populate user submitted data
	*/

	var getMyProfiles = function () {
		
		//GET API
		aboutAPI.getProfile($rootScope.profileType)
			.then(function (data) {
				console.log('my needs --> ', data);
			},
			function (err) {
				console.log(err);
			});
	};


	//Tab selection
	$scope.getSelectedHeader = function(selectedTab) {
		Utility.getSelectedHeader(selectedTab);
	};
		
	// for Service Provider
	$scope.elderCareContent = false;
	$scope.driverCotent = false;
	$scope.childCareContent = false;


	// For Service Seeker	
	$scope.sschildCareContent = false;
	$scope.sselderCareContent = false;
	$scope.childrenSelection = true;
	$scope.specialChildCare = true;
	$scope.medicalTest = true;
	$scope.eldersCount = true;
	$scope.elderExp = true;
	$scope.eldermedicalTest = true;
	
	if (setValue.getProfileType() == 'Service Seeker') {
		$scope.onlyForServiceProvider = true;
	}

	// For Service Provider 
	if ( setValue.getProfileType() == "Service Provider" &&  (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
		$scope.elderCareContent = false;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
	}
	else if(setValue.getProfileType() == "Service Provider"  && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = false;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
	}
	else if (setValue.getProfileType() == "Service Seeker"  &&  (setValue.getDomains() == "Baby Care" || setValue.getDomains() == "Child Care" || setValue.getDomains() == "Baby Caregiver" || setValue.getDomains() == "Child Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) 
	{
		$scope.sschildCareContent = false;
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sselderCareContent = true;
	
	}
	else if (setValue.getProfileType() == "Service Seeker"  && (setValue.getDomains() == "Elder Care" || setValue.getDomains() =="Elder Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) {
		$scope.sschildCareContent = true;
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sselderCareContent = false;

		//Call GET API for Elder care
		getUserDetails();
		getCountries();
		getMyProfiles(); //my needs GET
	
	}
  else {
		$scope.elderCareContent = true;
		$scope.childCareContent = true;
		$scope.driverContent = false;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
		//Call GET API for driver
		getUserDetails();
		getCountries();
	}

	$scope.copyAddress =  function() {
		if($scope.sameAddress == true) {
			$scope.permanentLine1 = '';
			$scope.permanentLine2 = '';
			$scope.sameAddress = false;
		}
		else if ($scope.sameAddress == false) {
			$scope.permanentLine1 = $scope.address_1;
			$scope.permanentLine2 = $scope.address_2;
			$scope.sameAddress = true;
		}
	};

	$scope.fileUpload = function(file) {
		if (file != null) {
			if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
				$timeout(function() {
					var fileReader = new FileReader();
					fileReader.readAsDataURL(file);
					fileReader.onload = function(e) {
						$timeout(function() {
							file.dataUrl = e.target.result;
						});
					}
				});
			}
		}
	};


	//Get states using selected country
	$scope.selectStateList = function () {

		if($scope.personalCountry == '' || $scope.personalCountry == undefined) {
			return false;
		}

		var countryID = $scope.personalCountry['id'];

		$rootScope.showSpinner($spinner); //show spinner

		countryAPI.getStates(countryID)
	  	.then(function (data) {
	  		$rootScope.hideSpinner($spinner); //hide spinner
				if (data != null) {
					$scope.states = data;
					$('.stateField').removeAttr('disabled');
				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				notifyManager.show('Failed to fetch states', 'error');
			});
	};

	$scope.driverSmoke = null;
	$scope.midDaySleep = null;
	$scope.drinking = null;
	$scope.tobacco = null;
	$scope.phoneDriving = null;
	$scope.tuberculosis = null;
	$scope.hepatitis = null;
	$scope.anaemia = null;
	$scope.hiv = null;
	$scope.haemophilia = null;
	$scope.nightBlindness = null;
	$scope.colourBlindness = null;
	$scope.otherField1 = null;
	$scope.otherField2 = null;
	$scope.selectedHigherEdu = null;
	$scope.overallHelath = false;

	//Gender selection
	$scope.selectGenderList = function (genderId, modelName) {
    $scope.modelName = genderId;
	};

	/* About form submission
	* 1. Get form data from user
	* 2. check validation
	* 3. Show response to user
	*/

	//Submit forms data to API
	var formSubmit = function (userDetails) {

		//submit from data to user
		aboutAPI.postDetails(userDetails)
			.then(function (data) {
				// if(data.message === 'success') {
					console.log('success -->', data);
					notifyManager.show('Successfully submitted', 'success');
				// }
			},
			function (err) {
				console.log('failed -->', err);
				if (err) {
					notifyManager.show(err.error, 'error');
				}
			});		
	};


	$scope.formPersonalEdu = function () {

		if ($scope.selectedEthnicity == null || $scope.selectedIdentifyDoc == null || $scope.selectedCountry == null || $scope.selectedBloodGroup == null || $scope.selectedWorkEligibility == null || $scope.selectedReligion == null) {
			return false;
		}

		console.log($scope.profilePicFile[0]);
		
		//Initializing
		var userDetails = {
			'authentication_token': $rootScope.authToken,
			'service_type': $rootScope.profileType,
			'user': {
				'user_details_attributes': {
					'profile_photo': $scope.profilePicFile[0], //n
					'date_of_birth': $scope.selectedDOB, 
					'gender': $scope.selectedGender,
					'ethnicity': $scope.selectedEthnicity['id'],
					'religion': $scope.selectedReligion['id'], 
					'driving_license_number': $scope.selectedLicenseNo,
					'driving_license': $scope.driverLicenceFile[0],
					'identity_document_type': $scope.selectedIdentifyDoc['id'],
					'identity_document_number': $scope.selectedIdentityNo,
					'identity_document': $scope.selectedIdentityFile[0],
					'work_permit': $scope.workPermitFile[0],
					'work_eligibility': $scope.selectedWorkEligibility['id']
				},
				'addresses_attributes': {
						'line_1': $scope.selectedAddress1, 
						'line_2': $scope.selectedAddress2,
						'landmark_id': $scope.selectedLandmark,
						'state_id': $scope.selectedState || 1, 
						'city': $scope.selectedCity,
						'country_id': $scope.selectedCountry['id'],
						'pincode_id': $scope.selectedPincode
				},
				'user_health_detail_attributes': {
					'blood_group': $scope.selectedBloodGroup['id']
				}
			}
		};

		console.log('userDetails --->', userDetails);

		//API CALL
		formSubmit(userDetails);

	};



	/* Education qualification
	* 1. Get user data
	*	2. submit it to API and show response
	*/


	$scope.formEducation = function () {

		var userDetails = { 
			'user': {
				'user_languages_attributes': []
			}
		};

		var ele = $('#languageSelector').find('div.form-container');

		$.each(ele, function (key, value) {
			
			var language = $('#languageSelector').find('div.form-container').find('input.custom-text-box').attr('name');
			var slider = $('#languageSelector').find('div.form-container').find('span.low').text();
			
			userDetails.user.user_languages_attributes.push({'language_id': language, 'proficiency': slider});
			console.log(userDetails.user);
		});

		if ($scope.selectedHigherEdu == undefined || $scope.countryOfEdu == undefined || $scope.selectedLanguage == undefined) {
			return false;
		}

		//Initializing
		var userDetails = {
			'authentication_token' : $rootScope.authToken, //adding authtokens,
			'service_type': $rootScope.profileType,
			'user': {
				'user_details_attributes': {
		      'highest_education': $scope.selectedHigherEdu['id'], 
		      'country_of_education': $scope.countryOfEdu['id'], 
		    },
	      'user_languages_attributes': [
		      {
		    	 	'language_id': $scope.selectedLanguage['id'],
		      	'proficiency': $scope.proficiencyVal
		    	}
	    	]
	  	}
		};

		//form submit to API
		formSubmit(userDetails);

	};


	//Remove appended language input and slider
	$('div').on('click', '.closeLang', function ($event) {
		$event.preventDefault();
		$(this).parent().prev().prev().remove();
		$(this).parent().prev().remove();
		$(this).parent().remove();
	})

	$scope.stayingWithFamily = false;
	$scope.hasBankAccount = false;
	$scope.hasOwnFlat = false;
	$scope.hasInsurance = '';
	
	//select has bank acount
	$scope.selectHasBank = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.hasBankAccount = value;
	};

	//select family details
	$scope.selectStayFamily = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.stayingWithFamily = value;
	};

	//select has own flat
	$scope.selectFlatDetails = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.hasOwnFlat = value;
	};

	/* About family details
	*	 1. Get user data and post to API
	*  2. Show server response in notification
	*/


	$scope.submitFamilyDetail = function () {

		if ($scope.martialStatus == undefined || $scope.familyMember['id'] == undefined || $scope.familyIncome['id'] == undefined || $scope.children['id'] == undefined || $scope.elder['id'] == undefined) {
			return false;
		}

		//Initializing
		var userDetails = {
			'authentication_token' : $rootScope.authToken, //adding authtokens,
			'service_type': $rootScope.profileType,
			'user': {
				'family_detail_attributes': {
					'id': $scope.familyID ? $scope.familyID : null, //if id present update, else create new
	        'marital_status': $scope.martialStatus['id'],
	        'members_count': $scope.familyMember['id'],
	        'children': $scope.children['id'],
	        'elders': $scope.elder['id'],
	        'annual_family_income': $scope.familyIncome['id'],
	        'living_with_family': $scope.stayingWithFamily,
	        'has_bank_account': $scope.hasBankAccount,
	        'own_a_flat_or_house': $scope.hasOwnFlat,
	        'has_insurance': $scope.hasInsurance['id']
				}
			}
		};

		//form submit to API
		formSubmit(userDetails);
	};

	$scope.getImageSrc = function(file){
		$('.uploadFile').click(); //generate thump img
	};

	$scope.uploadBtn = function(form) {
		$(form).click(); //show browse file
	};

	/*
	* Elder Care form submission
	*/

	$scope.selectedJob = 0; //jobs
	$scope.elderCareAdd1 = null; //address
	$scope.elderCareAdd2 = null; //address
	$scope.elderCareAdd3 = null; //address
	$scope.myNeedsCountry = null; //country
	$scope.myNeedsState = null; //state
	$scope.myNeedsCity = null; //city
	$scope.myNeedsLandmark = null; //landmark
	$scope.myNeedsGender = null; //gender
	$scope.foodPlaning = null; //food planing
	$scope.medicalAssitant = null; //medicalAssitant
	$scope.emotionalSupport = null; //emotional support
	$scope.safetyNeeds = null; //emotional support
	$scope.counselling = null; //counselling
	$scope.assitantWithPets = null; //assitantWithPets
	$scope.clothing = null; //clothing
	$scope.accElder = null; //accElder
	$scope.elderCareOther = null; //other field
	$scope.elderSmoking = null; //elderSmoking
	$scope.elderDrinking = null; //elderDrinking
	$scope.elderTobacco = null; //elderDrinking
	$scope.elderNotConcerned = null; //elderNotConcerned
	$scope.elderHabitOther = null; //elderHabitOther
	$scope.healthPoor = null; //healthPoor
	$scope.healthFair = null; //healthFair
	$scope.healthGood = null; //healthGood
	$scope.healthVeryGood = null; //healthVeryGood
	$scope.healthExcellent = null; //healthExcellent
	$scope.elderTuberculosis = null; //elderTuberculosis
	$scope.elderNightBlind = null; //elderNightBlind
	$scope.elderColorBlind = null; //elderColorBlind
	$scope.elderHiv = null; //elderHiv
	$scope.elderAlignmentOther = null; //elderAlignmentOther
	$scope.familyLaundry = null; //familyLaundry
	$scope.lightHouseKeeping = null; //lightHouseKeeping
	$scope.elderShopping = null; //elderShopping
	$scope.elderCooking = null; //elderCooking
	$scope.elderMedical = null; //elderMedical
	$scope.elderMedicalOther = null; //elderMedicalOther
	$scope.aidTraining = null; //aidTraining
	$scope.elderCRN = null; //elderCRN
	$scope.elderCPR = null; //elderCPR
	$scope.certifiedNurse = null; //certifiedNurse
	$scope.elderCertified = null; //elderCertified
	$scope.specialNeeds = null; //specialNeeds
	$scope.elderOtherCount = null; //elderOtherCount
	$scope.eldersCount = null; //elderOtherCount

	$scope.handlingElderNo = null; //handlingElderNo
	$scope.handlingElderFrail = null; //handlingElderFrail
	$scope.elderExp = null; //elderExp

	$scope.cognitiveChallenges = null; //cognitiveChallenges
	$scope.healthChallenges = null; //healthChallenges
	$scope.emotionalChallenges = null; //emotionalChallenges
	$scope.physicalChallenges = null; //physicalChallenges

	$scope.alzheimer = null; //alzheimer
	$scope.cancer = null; //cancer
	$scope.cysticFibrosis = null; //cysticFibrosis
	$scope.depression = null; //depression
	$scope.diabetes = null; //diabetes

	$scope.dyslexia = null; //dyslexia
	$scope.elderSyndrome = null; //fragileSyndrome
	$scope.hearingLoss = null; //hearingLoss
	$scope.heartDisease = null; //heartDisease

	$scope.incontinence = null; //incontinence
	$scope.elderLungDisease = null; //lungDisease
	$scope.mentalIllness = null; //mentalIllness
	$scope.muscularDystrophy = null; //muscularDystrophy
	$scope.osteoporosis = null; //osteoporosis

	$scope.parkinsonDisease = null; //parkinsonDisease
	$scope.seizures = null; //seizures
	$scope.sleepDisorders = null; //sleepDisorders
	$scope.eyeDiseases = null; //eyeDiseases
	
	$scope.providersAge = {}; //providersAge
	$scope.budgetService = null; //budgetService
	$scope.healthInsurance = null; //healthInsurance
	$scope.elderBonus = null; //elderBonus
	
	$scope.elderPhone = null; //elderPhone
	$scope.elderConveyance = null; //elderConveyance
	$scope.elderDayOff = null; //elderDayOff
	$scope.elderLeaves = null; //elderLeaves
	$scope.elderLeisureTime = null; //elderLeisureTime
	$scope.elderOtherBenifit = null; //elderOtherBenifit
	$scope.elderMedicalTest = null; //elderMedicalTest

	$scope.elderPayment = null; //elderPayment
	$scope.elderJobTrial = null; //elderJobTrial
	$scope.elderMoreDetails = null; //elderMoreDetails

	//Radio button selected
	$scope.selectRadioBtn = function (value, scopeName) {
		$scope.scopeName = value;
	};

	
	$scope.formElderCare = function () {

		var userDetails = {

		};



	};




	$scope.init = function(){
    $scope.status = true;
  }
  
  $scope.changeStatus = function(){
    $scope.status = !$scope.status;
  }

  	//Social networks login
	$scope.loginGoogle = function() {
        var clientId = "693593979546-crlru3n841g17hg23r13fsdgu412t3og.apps.googleusercontent.com";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        var url = "https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

   $scope.loginFacebook = function() {
        var clientId = "350562095126583";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        
        var url = "https://www.facebook.com/dialog/oauth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

}]);



/*-----  End of Controller = aboutMeCtrl  ------*/



