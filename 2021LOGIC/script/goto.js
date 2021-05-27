/* 回版頭 
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() > 300){ //設定大於300px才顯示浮層
            jQuery('#gotop').fadeIn("fast");
        } else {
            jQuery('#gotop').stop().fadeOut("fast");
        }
    });
});
*/

/* goTop*/ 
function goTop(val) {
jQuery('html,body').animate({scrollTop:jQuery(val).offset().top},700);
}

/* 強制連結**/
function forcereload(tab_id)
   {
    window.location.hash = tab_id;
    window.location.reload(true);
   }



/*hover PK浮層*/
function goTop(val) {
jQuery('html,body').animate({scrollTop:jQuery(val).offset().top},700);
}

$(function(){

	$("#pkfixd").hover(
		function(){
			$("#xxx").show();
		},
		function(){
			$("#xxx").hide();			
		}
	);
	
});

/* btnbg*/
function agree(val) {
	$(this).click( $(val).fadeIn() );
}
$(function(){
	var btnbg = $(".btnbg");
	var btnbg_close = $(".btnbg .close , .btnbg .but-close");
	var btnbg_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	
	btnbg_close.delegate( "a" ,"touchstart click",function(e){
		$(btnbg).fadeOut();
		e.preventDefault();
	});
	 btnbg.delegate( btnbg_BOXclose ,"touchstart click",function(e){
		 
		$(btnbg).fadeOut();
		e.preventDefault();
	});
	
	$('.btnbg li').click(function(){
		$(btnbg).fadeOut();
	})
	
	
	
});


/* btnbg */
function agree(val) {
	$(this).click( $(val).fadeIn() );
}
$(function(){
	var btnbg2 = $(".btnbg2");
	var btnbg_close2 = $(".btnbg2 .close , .btnbg2 .but-close");
	var btnbg_BOXclose2 = ".btnclose , .fixedfooterArea_B ";
	
	btnbg_close2.delegate( "a" ,"touchstart click",function(e){
		$(btnbg2).fadeOut();
		e.preventDefault();
	});
	 btnbg2.delegate( btnbg_BOXclose2 ,"touchstart click",function(e){
		 
		$(btnbg2).fadeOut();
		e.preventDefault();
	});
	
	$('.btnbg2 li').click(function(){
		$(btnbg2).fadeOut();
	})
	
	
	
});



