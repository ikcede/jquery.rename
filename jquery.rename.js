
(function($) {

	$.fn.rename = function(settings) {
	
		settings = $.extend({
			editEvent:"dblclick"
		},settings);
		
		$(this).prop("rename",false);
		
		$("span").on(settings.editEvent, this, function() {
		
			if(!$(this).prop("rename")) {
		
				var val = $(this).html(); 
				$(this).html("<input type = 'text' class = 'renameText' value="+val+"></input>");
				$(".renameText").focus();
				
				$(this).prop("rename",true);
			
			}
			
		});
		
		$("span").on("keydown", this, function(e) {
		
			var code = (e.keyCode ? e.keyCode : e.which);
			if(code === 13) {
		
				if($(".renameText").attr("value") === "") {
					$(this).html("default");
				}
				else {
					$(this).html($(".renameText").val());
				}
				
				$(this).prop("rename",false);
				
			}
			
		});
		
		// Have to use live because on doesn't work
		var renameThis = this;
		$(".renameText").live("blur",function() {
		
			if($(renameThis).prop("rename")) {
				if($(".renameText").attr("value") === "") {
					$(renameThis).html("default");
				}
				else {
					$(renameThis).html($(".renameText").val());
				}
				$(renameThis).prop("rename",false);
			}
		});
		
	}

}(jQuery));