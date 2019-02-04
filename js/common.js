
$(document).ready(function() {
	
/////////// Fancybox	

	$("a.collectionsImg").fancybox();
	
	$("a.collectionsImg").fancybox({
		'hideOnContentClick': true
	});
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

	$('#myModal').on('shown.bs.modal', function () {
  		$('#myInput').trigger('focus')
	})

//////////// Actvie__btn
        $('.header-btn').on('click',function(e){
          e.preventDefault;
          $(this).toggleClass('header-btn_active');
          $('.header-menu').toggleClass('header-menu_active')
        });	
	
});