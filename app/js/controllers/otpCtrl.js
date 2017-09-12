
/*================================================================
=>                  Controller = Otp
==================================================================*/
/*global app, document, $*/

app.controller('OtpCtrl', ['$scope', '$rootScope', 'otpAPI', 'emailAPI', 'setValue','$location', function ($scope, $rootScope, otpAPI, emailAPI, setValue,$location) {

  'use strict';

  /**
    * ##OTP FLOW
    * 1. Get otp conformation to your mobile, 
    * 2. enter the otp number in OTP form
    * 3. 
  */

  //Initializing scope
  var options = {};
  var optionsResend = {};
  var otpOptions = {};

  //Reset login form and setPristine to form
  var reset = function () {
    if ($scope.otpForm) {
      options = null;
      optionsResend = null;
      otpOptions = null;
      $scope.otpErrorMsg = '';
      $scope.otpSuccessMsg;
      $scope.otpCode = '';
      $scope.otpForm.$setPristine();
      $scope.$apply(); //apply scope value
    }
  };

  //Diable input type number scroll
  var inputNumber = document.getElementById('inputOTP');
  inputNumber.addEventListener('mousewheel', function (event) {
    this.blur();
  });

  $(inputNumber).keydown(function (evt) {
    if (evt.keyCode === '37' || evt.keyCode === '38' || evt.keyCode === '39' || evt.keyCode === '40') {
      evt.preventDefault();
    }
  });

  //On popup close, reset form
  $('#otpModel').on('click', '.closePopup, .modal-backdrop', function (event) {
    event.preventDefault();
    reset(); //reset form
  });

  //On hiding popup, reset form
  $('#myModal').on('hidden.bs.modal', function (event) {
    event.preventDefault();
    reset(); //reset form
  });

  //OTP submit
  $scope.twoFactorAuth = function () {
    $scope.otpErrorMsg = '';
    $scope.otpSuccessMsg = '';
    $('#otpSubmit').attr('disabled', 'disabled'); //disabled otp submit btn 

    options = {
      'code' : JSON.stringify($scope.otpCode),
      'user' : {
        'email': setValue.getEmailId()
      }
    };
    
    //OTP Services
    otpAPI.twoFactorAuth(options)
      .then(function (data) {
        console.log('otp successfully --> ', data);
        $('#otpSubmit').removeAttr('disabled'); //enable otp submit btn 

        if (data.confirmed_email == true && data.confirmed_phone_number == true && data.authentication_token != null) {
          $.removeCookie('userDetails'); //remove previous userDetails
          $rootScope.authToken = '';
          $.cookie.json = true;
          
          if (data.remember_me == '1') {
            $.cookie('userDetails', data, { expires: 1, path: '/' }); //store userDetails in cookies
            $timeout(function () {
              $('.otp-popup-module').addClass('none');
              $('.popup-module').addClass('none');
              $location.path('/aboutme');
            },1);
          }
          else {
            $.cookie('userDetails', data, { expires: 30, path: '/' });
            $timeout(function () {
              $('.otp-popup-module').addClass('none');
              $('.popup-module').addClass('none');
              $location.path('/aboutme');
            },1);
          }
        }
        else if (data.confirmed_email == false && data.confirmed_phone_number == true) {
          console.log('Otp Confirmed -->', data);
          $('.otp-popup-module').addClass('none');
          $('.login-module').removeClass('none');
        }
      },        
      function (err) {
        $('#otpSubmit').removeAttr('disabled'); //enable otp submit btn 
        console.log('otp verification failed', err);
        if (err.message) {
          $scope.otpErrorMsg = err.message;
        }
      });
  };

  //Resend OTP
  $scope.resendOTP = function () {
    $scope.otpSuccessMsg = '';
    $scope.otpErrorMsg = '';

    otpOptions = {
      'user' : {
        'email': setValue.getEmailId()
      }
    };

    //OTPresend Services
    otpAPI.twoFactorResend(otpOptions)
      .then(function (data) {
        console.log('otp successfully', data);

      },        
      function (err) {
        console.log('otp verification failed', err);
        if (err.message) {
          $scope.otpErrorMsg =  err.message;
        }
      });
  };

  //Resend confirmation email
  $scope.resendEmail = function () {
    $scope.otpSuccessMsg = '';
    $scope.otpErrorMsg = '';

    optionsResend = {
      'user' : {
        'email': setValue.getEmailId()
      }
    };

    //Resend email service
    emailAPI.resendEmail(optionsResend)
      .then(function (data) {
        $scope.otpSuccessMsg = 'A confirmation email has been sent to your registered email';
        console.log('resendEmail successfully', data);
      },        
      function (err) {
        console.log('resendEmail failed', err);
        if (err.message['email']) {
          $scope.otpErrorMsg =  'Email ' + err.message['email'];
        }
      });
    };

    $scope.showLoginPage1Popup = function() {
      $('.login-module').removeClass('none');
      $('.otp-popup-module').addClass('none');   
    };

}]);


/*-----  End of Controller = Otp  ------*/


