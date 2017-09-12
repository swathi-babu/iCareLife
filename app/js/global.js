'use strict';
/*global $, navigator, Modernizr, window, FastClick, _, document */

/**
 * [Utility is an object which contains all the custom utility methods ]
 * @type {Object}
 */
var Utility = {


    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    removes the class from the element
    ====================================================================================*/

    removeCls: function (element, className) {
        element.removeClass(className);
    },



    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    adds the class from the element
    ====================================================================================*/

    addCls: function (element, className) {
        element.addClass(className);
    },

    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    will stop the scrolling effect
    ====================================================================================*/

    hideScroll: function (element) {
        element.style.overflow = 'hidden';
    },

    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    will starts the scrolling effect
    ====================================================================================*/

    showScroll: function (element) {
        element.style.overflow = 'scroll';
    },

    /*====================================================================================
    =>           Mobile menu click
    ====================================================================================*/

    mobileMenu: function () {
      $('header .mobile-menu-icon').on('click', function(e) {
        e.stopPropagation();
        $('header .mobile-menu-container').slideDown();
      });
      $('body').on('click', function() {
        $('header .mobile-menu-container').slideUp();
      });
    },

    /*====================================================================================
    =>           Accordian Tab and icon Chnage Event
    ====================================================================================*/
    getSelectedHeader: function(value){ 
       $('.panel div:first-child').removeClass('active-header');
       $('.panel div:first-child').find('div#toggleButton').removeClass('toggle-icon-active').addClass('toggle-icon');
       $('#'+value).addClass('active-header');
       var toggle = $('#'+value).find('div#toggleButton').removeClass('toggle-icon').addClass('toggle-icon-active');
     },


    /*====================================================================================
    =>           Carousel On landing Page and User Profile Page
    ====================================================================================*/

    carsouelCalling : function () {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 210,
            itemMargin: 5,
            pausePlay: false,
            maxItems: 3,
        });
        
    },

    /*====================================================================================
    =>          Resume Selector
    ====================================================================================*/
    resumeSelector : function(value){
        $(".caption").removeClass("selected-resume");
        //$('#'+value).parentsUntil( ".thumbnail" ).removeClass("selected-resume");
        $('#'+value).parentsUntil( ".thumbnail" ).addClass("selected-resume");

    }





};

var disPopCourcesList = {
    'Elder Care': [
        {
            'id' : 1,
            'name' : 'Elder Care',
            'img' : 'images/babycare.jpeg',
            'module_count' : 16,
            'certificate_count' : 1,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 2,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 6,
            'certificate_count' : 2,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'Elder Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 13,
            'certificate_count' : 3,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 24,
            'certificate_count' : 4,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Elder Care',
            'img' : 'images/babycare.jpeg',
            'module_count' : 21,
            'certificate_count' : 5,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 6,
            'name' : 'Elder Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 21,
            'certificate_count' : 6,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 7,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 21,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ],
    'Baby Care': [
        {
            'id' : 1,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 23,
            'certificate_count' : 12,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        },  {
            'id' : 2,
            'name' : 'Baby Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 44,
            'certificate_count' : 22,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'babycare',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 45,
            'certificate_count' : 67,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 8,
            'certificate_count' : 3,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 4,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ],
    'Driver': [
        {
            'id' : 1,
            'name' : 'Driver',
            'img' : 'images/urbandriver.jpeg',
            'module_count' : 16,
            'certificate_count' : 122,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 2,
            'name' : 'Driver',
            'img' : 'images/urbandriver.jpeg',
            'module_count' : 60,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'Driver',
            'img' : 'images/childcare.jpeg',
            'module_count' : 66,
            'certificate_count' : 23,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Driver',
            'img' : 'images/childcare.jpeg',
            'module_count' : 45,
            'certificate_count' : 6,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Driver',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 21,
            'certificate_count' : 56,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ]
};

var setUpYourAccount = {
    'ServiceSeeker': {
        'name': 'Service Seeker',
        'id': 'Service Seeker',
        'iwant': [
            {
                'name': 'Learn',
                'id': 'Learn',
                'Learn': {
                    'lookingfor': [
                        {'name': 'Baby Care', 'id': 'baycare'}, {'name': 'Child Care', 'id': 'childcare'}, {'name': 'Elder Care', 'id': 'eldercare'}, {'name': 'Driving', 'id': 'driving'}
                    ]
                }
            }, {
                'name': 'Hire',
                'id': 'Hire',
                'Hire': {
                    'lookingfor': [
                        {'name': 'Baby Caregiver', 'id': 'baycaregiver'}, {'name': 'Child Caregiver', 'id': 'childcaregiver'}, {'name': 'Elder Caregiver', 'id': 'eldercaregiver'}, {'name': 'Chauffeur/Driving', 'id': 'Chauffeur/Driving'}
                    ]
                }
            }
        ]
    },
    'ServiceProvider': {
        'name': 'Service Provider',
        'id': 'Service Provider',
        'iwant': [
            {
                'name': 'Learn/Get Trained',
                'id': 'Learn/Get Trained',
                'Learn/Get Trained': {
                    'lookingfor': [
                        {'name': 'Baby Caregiving', 'id': 'baycaregiving'}, {'name': 'Child Caregiving', 'id': 'childcaregiving'}, {'name': 'Elder Caregiving', 'id': 'eldercaregiving'}, {'name': 'Driving', 'id': 'Driving'}, {'name': 'Food Court Etiquette', 'id': 'foodcourt'}
                    ]
                }
            }, {
                'name': 'Get a Job',
                'id': 'Get a Job',
                'Get a Job': {
                    'lookingfor': [
                        {'name': 'Baby Caregiver Job', 'id': 'baycaregiverjob'}, {'name': 'Child Caregiver Job', 'id': 'childcaregiverjob'}, {'name': 'Elder Caregiver Job', 'id': 'eldercaregiverjob'}, {'name': 'Chauffeur/Driving Job', 'id': 'Chauffeur/Drivingjob'}, {'name': 'Food Court Staff', 'id': 'foodcourtstaffjob'}
                    ]
                }
            }
        ]
    }
};