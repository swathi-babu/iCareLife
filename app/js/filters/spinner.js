
/*================================================================
=>                   Filter = spinner
==================================================================*/
/*global app, Spinner, $ */

app.filter('spinner', function () {
	
	'use strict';

	return function (action, options) {

		var opts = {
			lines: 10, // The number of lines to draw
			length: 6, // The length of each line
			width: 4, // The line thickness
			radius: 10, // The radius of the inner circle
			corners: 1, // Corner roundness (0..1)
			rotate: 7, // The rotation offset
			color: '#1D2939', // #rgb or #rrggbb
			speed: 0.8, // Rounds per second
			trail: 33, // Afterglow percentage
			shadow: true, // Whether to render a shadow
			hwaccel: false, // Whether to use hardware acceleration
			className: 'spinner', // The CSS class to assign to the spinner
			//zIndex: 2e9, // The z-index (defaults to 2000000000)
			zIndex: 1, // The z-index (defaults to 2000000000)
			top: 'auto', // Top position relative to parent in px
			left: 'auto',  // Left position relative to parent in px
			element: '',   // Element to bind the spinner
		};

		if (typeof(options) === 'object') {
			$.extend(opts, options);
		}

    if (opts.element.length === 0) {
			return false;
    }


    var spinner = new Spinner(opts).spin();

    switch (action) {
			case 'hide':
			if (opts.element.hasClass('discussionBody')) {
				opts.element.children().animate({'opacity': '1'}, 50);
			}
			opts.element.find('.' + opts.className).remove();
			break;

      default:
			opts.element.append(spinner.el);

    }

	};
});


/*-----  End of Filter = spinner  ------*/