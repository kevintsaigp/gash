// �ܼƩw�q ---------------------------
var $window = $(window);
var speed = 500; //���ʳt��



	
// �ƥ󱱨� ---------------------------


$('.gotop a').click(function(){
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({
		scrollTop: 0
	}, speed );
	return false;
});


$('document').ready(function(){	
	$window.on('scroll', function () {
		if ($window.scrollTop() < 400) {
			$('.gotop').fadeOut(600);
		}if($window.scrollTop() > 1200) {
			$('.gotop').fadeIn(600);
		}
	});
});