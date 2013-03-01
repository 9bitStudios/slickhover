/*
* File: jquery.slickhover.js
* Version: 1.0.0
* Description: Create a simple hover effect for images to open up in a popup using prettyPhoto or fancyBox of whatver else
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

    $.fn.slickhover = function (options) {

        var defaults = $.extend({
            icon: 'images/slickhover/zoom-white.png',
            color: '#000',
            opacity: 0.2,
            speed: 400
        }, options);
        
		/******************************
		Private Variables
		*******************************/         
        
        var object = $(this);
		var settings = $.extend(defaults, options);
        
		/******************************
		Public Methods
		*******************************/         
        
        var methods = {
        	
			init: function() {
				return this.each(function () {
					methods.appendHTML();
					methods.setEventHandlers();
				});
			},
			
			/******************************
			Append HTML
			*******************************/			
			
			appendHTML: function() {
			    if($(object).is('img')) {
			        $(object).wrap('<div style="display:inline-block; background:url('+settings.icon+') center center no-repeat '+settings.color+';"></div>');
			    }
			},

			/******************************
			Set Event Handlers
			*******************************/			
			
			setEventHandlers: function() {
				
				$(object).on({
					mouseenter: function () {
						$(this).stop().animate({ opacity: settings.opacity }, settings.speed);  	
					}, 
					mouseleave: function () {
						$(this).stop().animate({ opacity: 1 }, settings.speed);  	
					}
				});
			}
        
        };
        
        if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in slickhover plugin!');
        } 
};

})(jQuery);