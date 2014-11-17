jQuery(function($){

	//region Parallax
	if($.fn.parallax){
		$('.pi-section-parallax').parallax('50%', 0.2);
	}
	//endregion
	
	/*
	function Move() {
		var windowHeight = $(window).height();
	    
		$('.pi-section-parallax').each(function () {
		
		    var pos = $(window).scrollTop();

		    $(this).css({
		        "background-position": "50% " + (-((windowHeight + pos) - 550) * 0.7) + "px",
		    });
			console.log($(this).attr('id'));
		});
	}

	$(window).resize(function () {
	    Move();
	});

	$(window).bind('scroll', function () {
	    Move();
	});
	*/
});