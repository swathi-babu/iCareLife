
/*================================================================
=>                  Controller = Mypayments
==================================================================*/
/*global app*/

app.controller('MyPaymentsCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {

	'use strict';

	$scope.debitCardpanel = false;
	$scope.creditCardpanel = true;
	$scope.NetBankingPanel = true;
	$scope.cashCardPanel = true;
	$scope.selectPaymentMode = function (value) {
		switch (value) {
			case 10 : 
				$scope.debitCardpanel = false;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = true;
				break;

			case 11 : 
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = false;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = true;
				break;

			case 12 :
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = false;
				$scope.cashCardPanel = true;
				break;

			case 13 : 
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = false;
				break;
		}
	};
	$scope.getSelectedHeader = function(selectedTab) {
		console.log(selectedTab);
		Utility.getSelectedHeader(selectedTab);
	};
}]);


/*-----  End of Controller = MyPayments  ------*/



