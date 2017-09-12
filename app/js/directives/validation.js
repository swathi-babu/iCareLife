/*===========================================================
=> 				Directive match
=============================================================*/

app.directive('match', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        match: '='
      },
      link: function(scope, elem, attrs, ctrl) {
        scope.$watch(function() {
          var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
          return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
        }, function(currentValue) {
          ctrl.$setValidity('match', currentValue);
        });
      }
    };
});

/*================================================================
=>                  Directive = password
==================================================================*/

app.directive('checkpassword', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {	

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			userRegistration.conformPassword.$invalid = true;
			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				scope.user['conformPassword'] = value;
				if (scope.user.email === scope.user.conformEmail) {
					console.log('true');
					scope.userRegistration.conformPassword.$invalid = false;
				} else {
					console.log('false');
					scope.userRegistration.conformPassword.$invalid = true;
				}
				scope.$apply();
			};

			$(element).on('change', function (e) {
				change(e);
			});
		}
	};

}]);


/*================================================================
=>                  Directive = change password
==================================================================*/

app.directive('changepassword', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			changePwdForm.confirmPassword.$invalid = true;
			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				
				if (scope.changePwdForm.newPassword.$viewValue === scope.changePwdForm.confirmPassword.$viewValue) {
					scope.changePwdForm.confirmPassword.$invalid = false;
				} else {
					
					scope.changePwdForm.confirmPassword.$invalid = true;
				}
				scope.$apply();
			};

			$(element).on('keyup', function (e) {
				change(e);
			});
		}
	};

}]);

/*================================================================
=>                  Directive = Check mail
==================================================================*/

app.directive('checkemail', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			// console.log('directive == checkpassword');

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			
			var attr = attrs;
			var controller = ctrl;
			var scopes = scope;
			userRegistration.confirmEmail.$invalid = true;

			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				scope.user['conformEmail'] = value;
				if (scope.user.email === scope.user.conformEmail) {
					console.log('true');
					scope.userRegistration.confirmEmail.$invalid = false;
				} else {
					console.log('false');
					scope.userRegistration.confirmEmail.$invalid = true;
				}
				scope.$apply();
			};


			element.on('keyup', function (e) {
				console.log('change email event');
				change(e);
			});
		}
	};

}]);

/*================================================================
=>                  Directive = integer
==================================================================*/

app.directive('integer', ['$rootScope', function ($rootScope) {

	'use strict';

	var integerRegexp = /^\-?\d+$/;

	return {
		restrict : 'A',
		require: 'ngModel',
		link: function (scope, elm, attrs, ctrl) {
			ctrl.$parsers.unshift(function (viewValue) {
				if (integerRegexp.test(viewValue)) {
					ctrl.$setValidity('integer', true);
					return viewValue;
				}
				else {
					ctrl.$setValidity('integer', false);
					return undefined;
				}
			});
		}
	};
}]);