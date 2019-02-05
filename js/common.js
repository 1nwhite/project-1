
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

//////////// Phone hover
	var touchHover = function() {
	    $('[data-hover]').click(function(e){
	        e.preventDefault();
	        var $this = $(this);
	        var onHover = $this.attr('data-hover');
	        var linkHref = $this.attr('href');
	        if (linkHref && $this.hasClass(onHover)) {
	            location.href = linkHref;
	            return false;
	        }
	        $this.toggleClass(onHover);
	    });
	};

	$(document).ready(function() { touchHover(); });
		
});