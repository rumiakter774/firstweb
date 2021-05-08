$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 20){
			$('.navbar').css("box-shadow","1px 1px 5px #495057");
		}
		else{
			$('.navbar').css('box-shadow','none');
		}	
	});
	$('.navbar-toggler').click(function(){
		//change icons
		$('.bx-menu').toggle('fast');
		$('.bx-x').toggle('fast');
		// navbar style foe small dec=vices
		$('.logo').toggleClass('custom-logo');
		$('.collapse').toggleClass('.custom-collapse');
	});
	//scroll animation
	//construstion
	const scl=ScrollReveal({
		origin:'top',
		distance:'80px',
		duration:2000,
		reset:true
	});

	 // add class name ir id name and also scroll efect
 	 scl.reveal('#home .detail',{delay:200,origin:"bottom"});
 	 scl.reveal('#person-img',{delay:800,origin:"bottom"});
 	 scl.reveal('.social-media',{delay:600,origin:"left"});

 	 scl.reveal('#about .detail',{delay:200,origin:"right"});
 	 scl.reveal('.gallery-pic-1',{delay:200,origin:"left"});
 	 scl.reveal('#about _btn',{delay:600,origin:"bottom"});
 	 scl.reveal('.hvr-grow-shadow',{delay:600,origin:"left"});
 	 scl.reveal('.goal',{delay:400,origin:"bottom"});

 	 scl.reveal('.gallery-pic-2',{delay:200,origin:"left"});
	 scl.reveal('#features .detail',{delay:200,origin:"right"});

 	 scl.reveal('blockquote',{delay:200,origin:"bottom"});
 	 scl.reveal('.galleryThrid div:nth-child(1)',{delay:200,origin:"right"});
 	 scl.reveal('.galleryThrid div:nth-child(2)',{delay:200,origin:"bottom"});
 	 scl.reveal('.galleryThrid div:nth-child(3)',{delay:200,origin:"left"});

 	 scl.reveal('.hvr-shadow:nth-child(1)',{delay:200,origin:"bottom"});
 	 scl.reveal('.hvr-shadow:nth-child(2)',{delay:800,origin:"top"});

 	 scl.reveal('.hvr-shadow:nth-child(3)',{delay:600,origin:"top"});
 	 scl.reveal('.hvr-shadow:nth-child(4)',{delay:800,origin:"bottom"});

 	 scl.reveal('.hvr-shadow:nth-child(5)',{delay:200,origin:"bottom"});
 	 scl.reveal('.hvr-shadow:nth-child(6)',{delay:800,origin:"top"});
 	 scl.reveal('.card-deck div:nth-child(1)',{delay:200,origin:"right"});
 	 scl.reveal('.card-deck div:nth-child(2)',{delay:600,origin:"bottom"});

 	 scl.reveal('.card-deck div:nth-child(3)',{delay:200,origin:"left"});
 	 scl.reveal('.card-deck div:nth-child(4)',{delay:600,origin:"top"});

 	 scl.reveal('.small-services',{delay:200,origin:"right"});

 	 scl.reveal('#contact p',{delay:600,origin:"bottom"});
 	 scl.reveal('form',{delay:200,origin:"left"});
 	 scl.reveal('.contact',{delay:600,origin:"bottom"});



 });