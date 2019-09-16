jQuery(document).ready(function($) {

	// for testing responsive using refresh page
	{
		let startWid = $(window).width();

		$(window).resize(function(event) {
			if(startWid != $(this).width()) location.reload();
		});
	}
	// dropdown Menu Open Close Hover
	{
		$('#menuJoomag .container .row .menu-body > ul > li > .dropdown-menu').fadeOut();

		$('.dropdownBtn').on('click',function(event) {
			event.preventDefault();
			$('.dropdownBtn').not(this).next('.dropdown-menu').fadeOut();
			$(this).next('.dropdown-menu').fadeToggle(500);
			$(this).children('svg').children('path').attr('stroke',function(index, attr){
			    return attr == "#2863FD" ? "#fff" : "#2863FD";
			});
			$('.dropdownBtn').not(this).children('svg').children('path').attr('stroke', "#fff");

			$(this).toggleClass('active');

			$('.dropdownBtn').not(this).removeClass('active');


			if($(window).width() < 993){
				$('#menuJoomag .menu-body ul li .dropdownBtn').not(this).children('svg').removeClass('rotate');
				$(this).children('svg').toggleClass('rotate');
			}
			
		});
	}
	
	// width  < 993px Menu Slide UP & Down // width < 360px Menu Slide UP & Down
	{
		if($(window).width() < 993){
			$('#menuJoomag .menu-body').slideUp();
		}

		if ($(window).width() < 360) {
			$('#menuJoomag .menu-btn').slideUp();
		}

		$('.threeLineBtn > button').on('click', function(event) {
			event.preventDefault();
			$(this).children('.threeLineMenu').toggleClass('changeLine');

			if($(window).width() < 993){
				$('#menuJoomag .menu-body').slideToggle(500);
			}
			if ($(window).width() < 360) {
				$('#menuJoomag .menu-btn').slideToggle(500);
			}

			
		});
	}

	// caruselCustomSay
	{
		setTimeout(()=>{
			$('#caruselCustomSay').height($('#caruselCustomSay ul .carusel-item:first-child').height() + 'px');
		}, 100);

		$('#caruselCustomSay').touchSlider({
			autoplay: {
				enable: true,
				pauseHover: true,
				addHoverTarget: '',
				interval: 3500
			}
		});

		$('#customerSay .ts-controls button').on({
			click: function(e){
				$('#caruselCustomSay').touchSlider({
					autoplay: {
						enable: false
					}
				});
			}
		});

	}
		
	// footer
	{
		if( $(window).width() < 570) {
			$('#footer-menu .drop-body').slideUp();
		}

		$('#footer-menu .dropFooMenu > h5').on('click',  function(event) {
				event.preventDefault();
				if( $(window).width() < 570) {
					$('#footer-menu .dropFooMenu > h5').not(this).removeClass('active');
					$(this).toggleClass('active');
					$('#footer-menu .drop-body').not($(this).next('.drop-body')).slideUp(200);
					$(this).next('.drop-body').slideToggle(500);
				}

		});

		// footer Min Menu Lang
		{
			$('.langFooter li').not($('.langFooter li.activeLang')).fadeOut();

			let ord = 1;
			for(let i of $('.langFooter li')){
				i.style.order = ord++; 
			}

			$('.langFooter li').on('click',function(event) {
				event.preventDefault();
				if($(this).hasClass('activeLang')){
					$('.langFooter li').not($(this)).fadeToggle();
				}

				if(!$(this).hasClass('activeLang')){
					$('.langFooter li.activeLang').css('order', $(this).css('order'));
					$(this).css('order', 3);
					$('.langFooter li').not($(this)).removeClass('activeLang');
					$('.langFooter li').not($(this)).fadeOut();
					$(this).addClass('activeLang');
				}
			});

		} 
	}

});