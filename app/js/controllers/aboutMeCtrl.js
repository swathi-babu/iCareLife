
/*=====================================================
  =>                  Controller = aboutMeController
  =======================================================*/
/*global app*/
app.controller('aboutmeCtrl', ['$http', '$scope', '$rootScope', 'aboutAPI','setValue', 'myReferenceAPI', function ($http, $scope, $rootScope, aboutAPI, setValue, myReferenceAPI) {
    
    'use strict';

    //Initialize fileReader support
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    $scope.panel0 = false;
    $scope.panel1 = true;
    $scope.panel2 = true;
    $scope.panel3 = true;
    $scope.panel4 = true;
    $scope.test = 'fgdgf';
    $scope.progressBar = "0%";
    $scope.onlyForServiceProvider = false;
    if(setValue.getProfileType() == 'Service Seeker'){
	$scope.onlyForServiceProvider = true;
    }
    $scope.selectTab = function (value) {
	switch (value) {
	case 0 : 
	    $scope.panel0 = false;
	    $scope.panel1 = true;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "20%";
	    break;
	case 1 : 
	    $scope.panel0 = true;
	    $scope.panel1 = false;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "40%";
	    break;

	case 2 :
	    $scope.panel0 = true;
	    $scope.panel1 = true;
	    $scope.panel2 = false;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "60%";
	    break;

	case 3 : 
    	    myReferenceAPI.getDetails()
		.then(function(data){
		    $scope.panel0 = true;
		    $scope.panel1 = true;
		    $scope.panel2 = true;
		    $scope.panel3 = false;
		    $scope.panel4 = true;
		    $scope.progressBar = "80%";
		    if (data != null) {
			if(data.user_references_attributes.length != 0){
			    $scope.emailId = data.user_references_attributes[0].email;
			    $scope.firstName = data.user_references_attributes[0].first_name;;
			    $scope.lastName = data.user_references_attributes[0].last_name;
			    $scope.knowDuration = parseInt(data.user_references_attributes[0].known_duration);
			    $scope.mobileNo = parseInt(data.user_references_attributes[0].phone);
			    $scope.membershipId = data.user_references_attributes[0].icare_membership;
			    $scope.relationships = data.user_references_attributes[0].relationship;
			    $scope.user_reference_id = data.user_references_attributes[0].id;
			    $scope.verificationType = data.drop_down_keys.verification_types;

			    for (var i in data.drop_down_keys.relationships) {
				var option = data.drop_down_keys.relationships[i];
				if (option.id === $scope.relationships) {
				    $scope.selectedRelationship = option;
				    break;
				}
			    }

			    buildVerificationTypeObject(data);
			}
		    }
		},
		      function(err){
			  console.log('failed get -->', err);
		      });
	    break;

	case 4 : 
	    $scope.panel0 = true;
	    $scope.panel1 = true;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = false;
	    $scope.progressBar = "100%";
	    break;
	}
    };


    var buildVerificationTypeObject = function(data){
	$scope.planName = [];
	$scope.price = [];
	$scope.test = [];
	$scope.hash_map = {};
	$scope.verification_Names = [];
	var length = data['drop_down_keys']['verification_types'].length;
	for(var count = 0; count < length; count ++) {
	    var plan_name = data['drop_down_keys']['verification_types'][count].plan_name;
	    $scope.planName[count] = plan_name;
	    
	    $scope.price[count] = data['drop_down_keys']['verification_types'][count].price;
	    for (var i=0; i< data['drop_down_keys']['verification_types'][count].types.length; i++){
		var key = data['drop_down_keys']['verification_types'][count].types[i].name;
		var value = data['drop_down_keys']['verification_types'][count].types[i].value;

		if(!$scope.hash_map.hasOwnProperty(key)){
		    $scope.hash_map[key] = [];
		    $scope[plan_name + "_" + key] = value;
		}
		
		$scope.hash_map[key].push(value);
	    }
	}

    };


    var aboutMeData = function () {
	$http.get("../json/aboutMe.json").success(function(response) {
	    $scope.aboutMeJson = response;
	    $scope.profile_highlight_header = $scope.aboutMeJson[0]['profile_highlight_container'][0]['profile_highlight_header'];
	    $scope.profile_highlight_buttonName = $scope.aboutMeJson[0]['profile_highlight_container'][1]['profile_highlight_buttonName'];
	    $scope.profile_highlight_Message = $scope.aboutMeJson[0]['profile_highlight_container'][2]['profile_highlight_Message'];

	    $scope.centerHeadingMain = $scope.aboutMeJson[1]['centerHeading'][0]['centerHeadingMain'];
	    $scope.centerHeadingMainSubText = $scope.aboutMeJson[1]['centerHeading'][1]['centerHeadingMainSubText'];

	    $scope.projectCompletion = $scope.aboutMeJson[2]['projectCompletion'];

	    $scope.AboutMe = $scope.aboutMeJson[3]['horizontalMenu'][0]['AboutMe'];
	    $scope.MySkills = $scope.aboutMeJson[3]['horizontalMenu'][1]['MySkills'];
	    $scope.MyPayment = $scope.aboutMeJson[3]['horizontalMenu'][2]['MyPayment'];
	    $scope.MyReferences = $scope.aboutMeJson[3]['horizontalMenu'][3]['MyReferences'];
	    $scope.MyProfile = $scope.aboutMeJson[3]['horizontalMenu'][4]['MyProfile'];

	    $scope.personalDetailsHeading = $scope.aboutMeJson[4]['personalDetails'][0]['personalDetailsHeading'];
	    $scope.socialMedia = $scope.aboutMeJson[4]['personalDetails'][1]['socialMedia'];
	    $scope.fb = $scope.aboutMeJson[4]['personalDetails'][2]['fb'];
	    $scope.google = $scope.aboutMeJson[4]['personalDetails'][3]['google'];
	    $scope.twitter = $scope.aboutMeJson[4]['personalDetails'][4]['twitter'];
	    $scope.profilePhoto = $scope.aboutMeJson[4]['personalDetails'][5]['profilePhoto'];
	    $scope.DOB = $scope.aboutMeJson[4]['personalDetails'][6]['DOB'];
	    $scope.dbFormat = $scope.aboutMeJson[4]['personalDetails'][7]['dbFormat'];
	    $scope.address = $scope.aboutMeJson[4]['personalDetails'][8]['address'];
	    $scope.addressPlaceHolder1 = $scope.aboutMeJson[4]['personalDetails'][9]['addressPlaceHolder1'];
	    $scope.addressPlaceHolder2 = $scope.aboutMeJson[4]['personalDetails'][10]['addressPlaceHolder2'];
	    $scope.landmark = $scope.aboutMeJson[4]['personalDetails'][11]['landmark'];
	    $scope.landmarkPlaceHolder = $scope.aboutMeJson[4]['personalDetails'][12]['landmarkPlaceHolder'];
	    $scope.state = $scope.aboutMeJson[4]['personalDetails'][13]['state'];
	    $scope.Country = $scope.aboutMeJson[4]['personalDetails'][14]['Country'];
	    $scope.pincode = $scope.aboutMeJson[4]['personalDetails'][15]['pincode'];
	    $scope.pincodePlaceHolder = $scope.aboutMeJson[4]['personalDetails'][16]['pincodePlaceHolder'];
	    $scope.gender = $scope.aboutMeJson[4]['personalDetails'][17]['gender'];
	    $scope.male = $scope.aboutMeJson[4]['personalDetails'][18]['male'];
	    $scope.female = $scope.aboutMeJson[4]['personalDetails'][19]['female'];
	    $scope.other = $scope.aboutMeJson[4]['personalDetails'][20]['other'];
	    $scope.ethnicity = $scope.aboutMeJson[4]['personalDetails'][21]['ethnicity'];
	    $scope.religion = $scope.aboutMeJson[4]['personalDetails'][22]['religion'];
	    $scope.bloodGroup = $scope.aboutMeJson[4]['personalDetails'][23]['bloodGroup'];
	    $scope.nationality = $scope.aboutMeJson[4]['personalDetails'][24]['nationality'];
	    $scope.dl = $scope.aboutMeJson[4]['personalDetails'][25]['dl'];
	    $scope.dlPlaceHolder = $scope.aboutMeJson[4]['personalDetails'][26]['dlPlaceHolder'];
	    $scope.workEligibility = $scope.aboutMeJson[4]['personalDetails'][27]['workEligibility'];
	    
	    $scope.workPermit = $scope.aboutMeJson[4]['personalDetails'][28]['workPermit'];
	    $scope.id = $scope.aboutMeJson[4]['personalDetails'][29]['id'];


	    $scope.browse = $scope.aboutMeJson[5]['common'][0]['browseButton'];
	    $scope.select = $scope.aboutMeJson[5]['common'][1]['select'];
	    $scope.skip = $scope.aboutMeJson[5]['common'][2]['skip'];
	    $scope.next = $scope.aboutMeJson[5]['common'][3]['next'];
	    $scope.addMore = $scope.aboutMeJson[5]['common'][4]['addMore'];

	    $scope.educationalQualificationHeading = $scope.aboutMeJson[6]['educationalQualification'][0]['educationalQualificationHeading'];
	    $scope.heq = $scope.aboutMeJson[6]['educationalQualification'][1]['heq'];
	    $scope.coe = $scope.aboutMeJson[6]['educationalQualification'][2]['coe'];
	    $scope.language = $scope.aboutMeJson[6]['educationalQualification'][3]['language'];
	    $scope.proficiency = $scope.aboutMeJson[6]['educationalQualification'][4]['proficiency'];
	})
	    .error(function(e){
		console.log('error is'+e);
	    });
    };
    aboutMeData ();

    $scope.getProfilePic = function () {
	$('#profile_pic').click();
    };


    $scope.getImage = function (value) {
	
	switch(value) {
	case 1 : 
	    $('#pdffile').click();
	    $('#pdffile').change(function(){
		$('#subfile').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#pdffile').css('visibilty','visible');
	    });
	    break;
	case 2 : 
	    $('#license').click();
	    $('#license').change(function(){
		$('#licenseValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#license').css('visibilty','visible');
	    });
	    break;
	case 3 : 
	    $('#wpermit').click();
	    $('#wpermit').change(function(){
		$('#wpermitValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#wpermit').css('visibilty','visible');
	    });
	    break;
	case 4 : 
	    $('#passport').click();
	    $('#passport').change(function(){
		$('#passportValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#passport').css('visibilty','visible');
	    });
	    break;	      
	}
    };

	$scope.showProfile = function () {
		
	};

    /* Get About me form data to populate
     * 1. Get from token after login
     * 2. Make GET API call
     * 3. Populate data into the form
     */

    var getAboutMeData = function () {
	aboutAPI.getAboutDetails()
	    .then(function(data) {
		customizedData(data);
    	    },
    		  function(data){
    		      console.log('error==>', data);
    		  });
    };
    
    //getAboutMeData(); //get form data

	var customizedData = function (data) {

		// $scope.addresses = data.addresses;
		// $scope.bloodGroups = data.blood_group;
		// $scope.country = data.country;
		// $scope.ethnicity = data.ethnicity;
		// $scope.familyDetail = data.family_detail;
		// $scope.gender = data.gender;
		// $scope.highestEducation = data.highest_education;
		// $scope.identityDocumentType = data.identity_document_type;
		// $scope.landmark = data.landmark;
		// $scope.language = data.language;
		// $scope.nationality = data.nationality;
		// $scope.options = data.options;
		// $scope.state = data.state;
		// $scope.userDetails = data.user_details;
		// $scope.userHealthDetail = data.user_health_detail;


    };

    //Generate Thumb to show to user on upload
    $scope.generateThumb = function(file) {
	if (file != null) {
	    console.log($scope.fileReaderSupported)
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
	    else {
	
	    }
	}
    };

    /* About form submission
     * 1. Get form data from user
     * 2. check validation
     * 3. Show response to user
     */

    //Initializing
    $scope.userOptions = {
	'authentication_token' : '',
	'user': {
	    'user_details_attributes': {
		'0': {
		    // 'profile_photo': $scope.profile_pic,
		    'date_of_birth': $scope.selectedDOB,
		    'gender': $scope.gender, //s
		    'ethnicity': $scope.ethnicity, //s
		    'religion': $scope.selectedReligion,
		    'driving_license': $scope.driving_license,
		    'work_permit': $scope.work_permit,
		    'identity_document': $scope.identity_document,
		    'highest_education': $scope.highestEducation, //s
		    'country_of_education': $scope.country_of_education
		}
	    },
	    'addresses_attributes': {
		'0': {
		    'line_1': $scope.address1, //s
		    'line_2': $scope.address2, //s
		    'landmark': $scope.landmark, //s
		    'state': $scope.state, //s
		    'city': $scope.selectedCity,
		    'country': $scope.country, //s
		    'pin': $scope.selectedPin //s
		}
	    },
	    'user_health_detail_attributes': {
		'blood_group': $scope.bloodGroups
	    },
	    'family_detail_attributes': {
		'marital_status': $scope.marital_status,
		'members_count': $scope.members_count,
		'children': $scope.selectedChildren,
		'elders': $scope.selectedElders,
		'annual_family_income': $scope.annual_family_income
	    }
	}
    };

    //Gender selection
    $scope.selectGender = function (q, c) {
	angular.forEach(q.choices, function (c) {
	    c.isUserAnswer = false;
	});
	c.isUserAnswer = true;
    };

    //Submit form
    $scope.submitAboutMe = function () {

	$scope.userOptions['authentication_token'] = $rootScope.authToken; //adding authtokens

	
	//submit from data to user
	aboutAPI.postDetails($scope.userOptions)
	    .then(function (data) {
	
	    },
		  function (err) {
		     
		  });
    };


    

   

}]);

/*-----  End of Controller = aboutMeCtrl  ------*/
