$(document).ready(function(){

	/*--------------------------------- функция для адаптивного меню -----------------------------*/
		function menuAdapt(menuBtn, menu, header) {

			var $menuBtn = menuBtn,
				$menu = menu,
				$header = header,
				menuHeight;

			$menuBtn.on('click', function(){
				menuHeight = $header.height();
				$menu.css('top', menuHeight);
				$menu.slideToggle();
			});

			$(window).resize(function(){
				if (window.matchMedia('(max-width: 768px)').matches && $($menu).is(':visible')) {
					$($menu).hide();
				} else if (window.matchMedia('(min-width: 768px)').matches) {
					$($menu).show();
				}
			});

		}

		menuAdapt($('.header .glyphicon.glyphicon-menu-hamburger'), $('.header__navList'), $('.header'));
	/*--------------------------------- функция для адаптивного меню End -------------------------*/



	/*--------------------------------- функция для якоря -------------------------*/
		function ancor (ancor, goal) {

			$(ancor).on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $(goal).offset().top - 80 }, 2000);
			  e.preventDefault();
			});

		}

		ancor($('#aboutMe'), $('.aboutMe'));
		ancor($('#myWorks'), $('.myWorks'));
		ancor($('#myContacts'), $('.myContacts'));
	/*--------------------------------- функция для якоря Конец -------------------------*/

});