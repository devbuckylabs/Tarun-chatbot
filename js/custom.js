var utilities = function(){
	var $ = jQuery;

	var redirect = function(){
	
		$('.top-container').click(function(){
			var rel = $(this).closest('.item').attr('rel');
			var botname = $(this).closest('.item').attr('data-botname');
			//alert($(this).find('h2').text().trim("Microsoft Azure"))
			//$('.lightbox-container h3').text($(this).find('h2')[0].innerHTML);
			$('.lightbox-container iframe').attr({'src':rel, 'data-botname':botname});
			$('.lightbox-container, .lighbox-overlay').addClass('active');
			$('html,body').animate({scrollTop:0}, 500);
		});
		$('.closebutton').click(function(){
			 var isChrome = !!window.chrome && !!window.chrome.webstore;
			if(isChrome){
				var recognition = new webkitSpeechRecognition();
			recognition.stop();
			$('.lightbox-container, .lighbox-overlay').removeClass('active');
			$('.lightbox-container iframe').attr({'src':'', 'data-botname':''});
			}
			else{
				$('.lightbox-container, .lighbox-overlay').removeClass('active');
			$('.lightbox-container iframe').attr({'src':'', 'data-botname':''});
			}
			
		});
	}
		
	//ready function
	var init = function(){
		redirect();
	}
	
	//load function
	var loadinit = function(){
		
	}
	
	$(window).load(function(){
		loadinit();
	});
	
	$('document').ready(function(){
		init();
	});

	return {
		Inital:init,
		InitalLoad:loadinit		
	}

}();