
/*================================================================
=>                  Controller = Myreference
==================================================================*/
/*global app*/

app.controller('contentlibraryctrl', ['$scope', '$rootScope', 'contentAPI', function ($scope, $rootScope,$contentAPI) {

	'use strict';
	
	
	

	$scope.browsecontent = function(selectedTab) {
		Utility.browsecontent(selectedTab);
	};


	var getCategoriesInfo = function (data) {
		console.log('filter infodata---->',data);
      contentAPI.getDetails(data)
          .then(function (data) {
              if (data !== null) {
                console.log('filter infodata---->',data);
              }
          });
          
  	};
 	// var getCountryList = function () {
  //   console.log('countries--->');
  //   countryAPI.getCountry()
  //     .then(function (data) {
  //       if (data != null) {
  //        $scope.countries = data;
  //       }
      
      
  //     });
  // };
		

	$scope.filter = { "'filter'": ["learn","childcare","babycare",""]};
	$scope.image = '';
	$scope.description = 'Leassons on safe driving over hill areas';
	$scope.moduels = '6 moduels,2 certifications';
	$scope.userCount = '5000 users enrolled';
	$scope.price = '$15';
	$scope.userlikes = "200"
	$scope.submitForm = function(){
	var data = [
	    {
	        "id": 298486374,
	        "title": "tesssss",
	        "certifications": 111,
	        "description": "aaaaaaaaaa",
	        "image_url": null,
	        "domain_id": 1,
	        "created_at": "2015-01-08T18:55:36.000Z",
	        "updated_at": "2015-01-20T12:05:55.000Z",
	        "pricing": 123,
	        "competency": null,
	        "course_structure": null,
	        "skill_level": 1,
	        "likes": null,
	        "unlikes": null,
	        "spree_products_id": null,
	        "certifications_id": null,
	        "subsribed_users_count": null
	    },
	    {
	        "id": 980190963,
	        "title": "tesssss",
	        "certifications": 111,
	        "description": "eeee",
	        "image_url": null,
	        "domain_id": 1,
	        "created_at": "2015-01-20T11:53:08.000Z",
	        "updated_at": "2015-01-20T11:53:08.000Z",
	        "pricing": null,
	        "competency": null,
	        "course_structure": null,
	        "skill_level": null,
	        "likes": null,
	        "unlikes": null,
	        "spree_products_id": null,
	        "certifications_id": null,
	        "subsribed_users_count": null
	    },
	]
	}

	
	$scope.showgridview = function() {
		Utility.carsouelCalling();
		$('.gridview').removeClass('none');
		$('.listview').addClass('none');
		
	};

	$scope.showlistview = function() {
		$('.listview').removeClass('none');
		$('.gridview').addClass('none');
		
	};
	
	// $scope.showPopup = function() {
	// 	$('.content-module').removeClass('none');
	// 	$('.gridview').addClass('none');
		
	// };
	$scope.showPopup = function() {
		
		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.content-module').removeClass('none');
			
	};
	
}]);


/*-----  End of Controller = Myreference  ------*/
