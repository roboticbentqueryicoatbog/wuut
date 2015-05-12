	jQuery(document).ready(function(){
		jQuery('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
			jQuery('#menu-trigger').on('click', function(){
				jQuery('#menu').slideToggle();
			});
		});



    $(document).ready(function() {
     
    $("#owl-example").owlCarousel({
     
     navigation : true, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true
 
// "singleItem:true" is a shortcut for:
// items : 1,
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false
 
});
 
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).width()/1333*340) {
       $('nav').addClass('fixed-header');
        $('.main-02 ').addClass('padding');
    }
    else {
       $('nav').removeClass('fixed-header');
        $('.main-02 ').removeClass('padding');
    }
});

function div_show() {
document.getElementById('form').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('form').style.display = "none";
}

