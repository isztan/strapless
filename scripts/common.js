// common javascript

	jQuery(function($) {
		
		function hasPlaceholderSupport() {
			var input = document.createElement('input');
			return ('placeholder' in input);
		}
		
		if (!hasPlaceholderSupport) {
		
			// clear field for default input values
		    $('.placeholder').each(function(i) {	    	
		    	// clearing event
		    	$(this).bind("focus", function(e) {
		    		if (e.target.value === e.target.defaultValue) e.target.value = "";
		    	});	    	
		    	// resetting event
		    	$(this).bind("blur", function(e) {
		    		if (e.target.value === "") e.target.value = e.target.defaultValue;
		    	});
		    
		    });
	    
	    }
	    
	    // primary nav suckerfish hover
	    $('#nav-list > li').hover(function() {
	    	$(this).addClass("hover");
	    }, function() {
	    	$(this).removeClass("hover");
	    });
	    
	    // open links in new window
	    $('.target-blank').attr("target", "_blank");
	 
	 });
	 