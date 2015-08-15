(function(){

	$(document).on("page:change", function() {
		hover();

	});

	var hover = function() {
		$('.org-info').hover(
			function() {
		    $(this).find('.org-image').hide();
		    $(this).find('.org-name').show();
			},
			function() {
		    $(this).find('.org-image').show();
		    $(this).find('.org-name').hide();
			}
		);
	}

})();