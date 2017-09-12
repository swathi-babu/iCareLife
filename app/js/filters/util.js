
/*================================================================
=>                   Filter = Humanize
==================================================================*/
/*global app, Humanize, $ */

app.filter('humanize', function () {
	
    'use strict';

    return function(str){
	var readable_str = str.replace(/_/g, " ").split(" ").map(function(i){return i[0].toUpperCase() + i.substring(1)}).join(" ");
	console.log(readable_str);
	return readable_str;
    };
    
});


/*-----  End of Filter = Humanize  ------*/
