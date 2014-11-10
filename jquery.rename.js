
(function($) {

	$.fn.rename = function(settings) {
	
		settings = $.extend({
		    allowEmpty: false,
		    child:null,
			editEvent:"dblclick",
			inputClass:"renameText",
			onRenameEnd: null,
			onRenameTest: null
		},settings);
		
		// Functions to handle creating and destroying rename inputs
		var renameOn = function(el) {
		    if($(el).children("."+settings.inputClass).length > 0) {
		        return false;
		    } else {
		        var innerText = $(el).text();
		        $(el).html("<input type='text' class='"+settings.inputClass+"' original-val='"+innerText+"' value='"+innerText+"'></input>");
		        $($(el).children("."+settings.inputClass)[0]).focus();
		    }
		};
		
		var renameOff = function(el) {
		    if($(el).children("."+settings.inputClass).length == 0) {
		        return false;
		    } 
		    
            var innerText = $($(el).children("."+settings.inputClass)[0]).val();
            
            if(innerText == "" && !settings.allowEmpty) {return false;}
            if(settings.onRenameTest && !settings.onRenameTest(el, innerText)) {return false;}
            $(el).text(innerText);
            
            if(settings.onRenameEnd) settings.onRenameEnd(el, innerText);
		    
		};
		
		if(settings.child) {
		    $(this).on(settings.editEvent, settings.child, function() {
		        renameOn(this);
		    });
		} else {
		    $(this).on(settings.editEvent, function() {
		        renameOn(this);
		    });
		}
		
		$(this).on("keydown", (settings.child || "" ) + " ." + settings.inputClass, function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code === 13) {
                $(this).blur();
            }
        });
        $(this).on("blur", (settings.child || "") + " ." + settings.inputClass, function(e) {
            renameOff($(this).parent()[0]);
        });
		
	}

}(jQuery));