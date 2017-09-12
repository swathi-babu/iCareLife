/*================================================================
=>                   Service = notifyManager
==================================================================*/
/*global app, document, $*/

app.service('notifyManager', ['$timeout', function ($timeout) {
	
	'use strict';

	var show = [], html, container, ele;
	container = document.createElement('div');
	container.className = 'notify-container';
	document.body.appendChild(container);

	this.show = function (msg, status, time) {
		//if no time is given. Set timeOut to 3000 
		var timeOut = time;
		if (typeof timeOut === 'undefined') {
			timeOut = 3000;
		}
		
		ele = document.createElement('div');
		
		$('.notify-container').addClass('blk');
		$(container).children().remove();
		ele.className = 'notify ' + status;
		ele.innerHTML = msg;
			
		//append element to container based on the class ( status )
		container.appendChild(ele);

		$timeout(function () {
			$('.' + status + '').css('opacity', '1');
		}, 50);
		this.hide(container, ele, timeOut);
	},

	this.hide = function (parent, ele, timeOut) {
		$timeout(function () {
			$('.notify-container').removeClass('blk');
			$(parent).children().remove();
		}, timeOut);
	};
}]);