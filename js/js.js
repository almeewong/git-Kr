//FOR INDEX
$(document).ready(function() {
	$("#news-slider12").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsTablet: [600,1],
        itemsMobile : [550,0],
        pagination:true,
        autoPlay:true
    });
	
    $("#news-slider13").owlCarousel({
        navigation : false,
        pagination : true,
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        navigationText : ["",""]
    });
    
});

//FOR toggle
$(function(){
	$(".record_toggle").click(function(){
		$(".record_page").toggle();
	})

	$(".record_hide").click(function(){
		$(".record_page").hide();	
	})

})


